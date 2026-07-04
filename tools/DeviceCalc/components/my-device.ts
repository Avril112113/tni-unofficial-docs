import { LitElement, PropertyValues, TemplateResult, css, html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { cache } from 'lit/directives/cache.js';
import { live } from 'lit/directives/live.js';
import { consume } from '@lit/context';

import _ from "lodash";

import { TniJsonData, TniJsonDevice, TniJsonDeviceId, TniJsonDeviceLogicController, TniJsonPlug, TniJsonPlugId, TniJsonProgram, TniJsonProgramId, TniJsonUseConfigId, TniProduceLimitType, TniSocketType, TniTraversalConsumptionPolicy } from 'raw/data-format5-spec.js';

import { dataContext } from "../data-context.js";
import { MyCombobox } from 'assets/js/components/my-combobox/my-combobox.js';
import { WaNumberInput } from '@awesome.me/webawesome/dist/ssr/all.js';



const IRRELEVANT_DEVICES = new Set([
	"units/gpu_servers/gpu_test_server.tscn",
	"units/servers/test_server.tscn",
	"units/routers/test_router.tscn",
]);


function _getDeepDiff<T extends Record<string, any>>(object: T, base: Record<string, any>): Partial<T> {
	return _.transform(object, (result: any, value: any, key: string) => {
		if (!_.isEqual(value, base[key])) {
			result[key] = (_.isObject(value) && _.isObject(base[key]))
				? _getDeepDiff(value as Record<string, any>, base[key] as Record<string, any>)
				: value;
		}
	});
}

// Converts TNI BBCode into a html template.
function _renderBBCode(description: string): TemplateResult[] {
	const re = /(\n)|\[(\w+)=(.*?)\]|\[\/(\w+)\]/g;
	const stack: TemplateResult[][] = [[]];
	const tag_stack = [];
	let lastEndPos = 0;
	while (re.lastIndex < description.length) {
		const startPos = re.lastIndex;
		const match = re.exec(description);
		const endPos = re.lastIndex;
		if (!match) break;
		lastEndPos = endPos;
		const matchStartPos = endPos - match[0].length;
		if (startPos < matchStartPos) {
			stack[stack.length-1]!.push(html`${description.slice(startPos, matchStartPos)}`);
		}

		if (match[0] == "\n") {
			stack[stack.length-1]!.push(html`<br>`);
		} else if (match[2]) {
			const value = match[3];
			switch (match[2]) {
				case "color":
					stack.push([]);
					tag_stack.push([match[2], value]);
					break;
				default:
					break;
			}
		} else if (match[4]) {
			if (tag_stack.length <= 0 && stack.length >= 2) continue;
			const elems = stack.pop();
			const [tag, value] = tag_stack.pop()!;
			switch (tag) {
				case "color":
					stack[stack.length-1]!.push(html`<span style="color: ${value};">${elems}</span>`);
					break;
				default:
					break;
			}
		}
	}
	if (lastEndPos < description.length) {
		stack[stack.length-1]!.push(html`${description.slice(lastEndPos, description.length)}`);
	}
	return stack[0]!;
}

function _renderProgramSize(program: TniJsonProgram): string {
	return `${program.code_size}${program.data_size ? `+${program.data_size}=${program.code_size+program.data_size}` : ""}`;
}

// AI Generated.
interface SumCombination {
    sum: number;
    values: number[];
}
function getSumCombinations(numbers: number[], maxLength: number): SumCombination[] {
    const uniqueSums = new Map<number, number[]>();

    function generate(currentCombo: number[], currentSum: number): void {
        // Store the unique sum and the combination that made it
        if (!uniqueSums.has(currentSum)) {
            uniqueSums.set(currentSum, [...currentCombo]);
        }

        // Base case: stop if we reached the maximum combination length
        if (currentCombo.length === maxLength) {
            return;
        }

        // Recursive case: allow repetition by starting from index 0 every time
        for (let i = 0; i < numbers.length; i++) {
            currentCombo.push(numbers[i]!);
            generate(currentCombo, currentSum + numbers[i]!);
            currentCombo.pop(); // Backtrack
        }
    }

    generate([], 0);
    
    return Array.from(uniqueSums.entries()).map(([sum, values]) => ({
        sum,
        values
    }));
}


interface CustomDeviceExt {
	CustomData?: CustomDeviceData,
}
interface CustomDeviceData {
	peripherals?: Record<number, TniJsonPlugId>;
}

@customElement('my-device')
export class MyDevice extends LitElement {
	@consume({ context: dataContext, subscribe: true })
	@state()
	private _data!: TniJsonData|null;

	get device_name() { return this._data && this.device_id ? this._data!.devices[this.device_id]?.product_name ?? null : null; }
	@property({ reflect: true })
	device_id: TniJsonDeviceId|null = null;

	get device_data_original() {
		return this._data && this.device_id ? this._data.devices[this.device_id] ?? null : null;
	}
	get device_data_is_original() {
		// TODO: This is quite ugly...
		let device_data = this.device_data;
		if (device_data?.CustomData) {
			device_data = {...device_data};
			device_data.CustomData = {...device_data.CustomData};
			if (_.isEmpty(device_data.CustomData!.peripherals)) {
				delete device_data.CustomData!.peripherals;
			}
			if (_.isEmpty(device_data.CustomData)) {
				delete device_data.CustomData;
			}
		}
		return _.isEqual(this.device_data_original, device_data);
	}
	@state()
	device_data: (TniJsonDevice&CustomDeviceExt)|null = null;

	// Reset to `null` upon merge.
	device_data_partial: Partial<TniJsonDevice&CustomDeviceExt>|null = null;

	difficulty = {
		device_warranty_period_multiplier: 1,
	};

	private __dropdown_items_programs_templates: TemplateResult<1>[] = [];
	private __dropdown_items_programs_templates_data?: any;
	get _dropdown_items_programs_templates(): TemplateResult<1>[] {
		if (this.__dropdown_items_programs_templates_data !== this._data) {
			this.__dropdown_items_programs_templates_data = this._data;
			this.__dropdown_items_programs_templates = [];
			if (this._data) {
				for (const program_id in this._data.programs) {
					const program = this._data.programs[program_id]!;
					if (program.release_name.length > 0) {
						this.__dropdown_items_programs_templates.push(html`
							<wa-dropdown-item value=${program_id}>
								${program.release_name}
								<span slot="details">${program.cpu_load}/${program.stack_size}/${program.code_size+program.data_size}</span>
							</wa-dropdown-item>
						`)
					}
				}
			}
		}
		return this.__dropdown_items_programs_templates;
	}

	private __dropdown_items_satas_templates: TemplateResult<1>[] = [];
	private __dropdown_items_satas_templates_data?: any;
	get _dropdown_items_satas_templates(): TemplateResult<1>[] {
		if (this.__dropdown_items_satas_templates_data !== this._data) {
			this.__dropdown_items_satas_templates_data = this._data;
			this.__dropdown_items_satas_templates = [];
			if (this._data) {
				for (const plug_id in this._data.plugs) {
					if (plug_id == "components/removables/usb_stick.tscn") continue;
					const plug = this._data.plugs[plug_id]!;
					if (plug.PeripheralPlug && plug.RemovableStorageDevice) {
						this.__dropdown_items_satas_templates.push(html`
							<wa-dropdown-item value="${plug_id}">
								+${plug.RemovableStorageDevice.available_sto} <span class="my-combobox-ignore">${plug.PeripheralPlug.product_name}</span>
								<span slot="details">
									<span style="display: inline-block; min-width: 5ch;">$${plug.PeripheralPlug.price}</span>
								</span>
							</wa-dropdown-item>
						`)
					}
				}
			}
		}
		return this.__dropdown_items_satas_templates;
	}

	private _sata_options: number[] = [];
	private _sata_prices: Record<number,number> = [];
	private _sata_ids: Record<number,TniJsonPlugId> = [];
	private __recalc_satas() {
		this._sata_options = [];
		this._sata_prices = [];
		this._sata_ids = [];
		if (this._data) {
			for (const plug_id in this._data.plugs) {
				if (plug_id == "components/removables/usb_stick.tscn") continue;
				const plug: TniJsonPlug = this._data.plugs[plug_id]!;
				if (plug.PeripheralPlug && plug.RemovableStorageDevice) {
					const sata_sto = plug.RemovableStorageDevice.available_sto;
					if (this._sata_options.indexOf(sata_sto) == -1){
						this._sata_options.push(sata_sto);
						this._sata_prices[sata_sto] = plug.PeripheralPlug.price;
						this._sata_ids[sata_sto] = plug_id;
					}
				}
			}
		}
	}
	private _getSataCombinations(sata_port_count: number) {
		const sata_combinations = getSumCombinations(this._sata_options, sata_port_count)
			.map(combination => {return {
				storage: combination.sum,
				values: combination.values,
				price: _.sumBy(combination.values, sata_size => this._sata_prices[sata_size]!),
				plug_ids: combination.values.map(sata_size => this._sata_ids[sata_size]!),
			}});

		sata_combinations.sort((a, b) => {
			return a.price - b.price;
		});

		return sata_combinations;
	}
	private _getProgramsRequirements(programs?: TniJsonProgramId[]): [number, number, number] {
		let programs_cpu = 0;
		let programs_mem = 0;
		let programs_size = 0;
		if (this._data && programs) {
			programs.forEach((program_id) => {
				const program = this._data?.programs[program_id];
				if (program) {
					programs_cpu += program.cpu_load;
					programs_mem += program.stack_size;
					programs_size += program.code_size + program.data_size;
				}
			});
		}
		return [programs_cpu, programs_mem, programs_size];
	}

	static override styles = css`
		wa-number-input::part(stepper) {
			aspect-ratio: unset;
		}
		wa-number-input::part(start),
		wa-number-input::part(end) {
			display: none;
		}
		wa-number-input::part(input) {
			padding: 0;
			width: max-content;
		}
		wa-number-input {
			width: 100px;
			--wa-content-spacing: 0;
		}

		.tiny-button {
			line-height: 0;
		}
		.tiny-button::part(base) {
			--wa-form-control-height: 21px;
			aspect-ratio: unset;
		}
		
		:host .input-changed::part(input) {
			color: var(--wa-color-yellow);
		}

		:host .flex-wrap-gap {
			display: flex;
			flex-wrap: wrap;
			gap: calc(var(--wa-content-spacing) / 2);
		}

		:host .flex-gap {
			display: flex;
			gap: calc(var(--wa-content-spacing) / 2);
		}

		:host .flex-wrap {
			display: flex;
			flex-wrap: wrap;
		}

		:host .some-text {
			text-align: center;
			margin: 0;
		}
		:host .some-title {
			font-weight: var(--wa-form-control-label-font-weight);
			text-align: center;
			margin: 0;
		}

		:host table.tbl-programs {
			border-collapse: collapse;
			width: 100%;
		}
		:host table.tbl-programs th,
		:host table.tbl-programs td {
			padding-right: var(--wa-content-spacing);
		}
		:host table.tbl-programs th:last-child,
		:host table.tbl-programs td:last-child {
			padding-right: 0;
		}

		@media (max-width: 725px) {
			:host table.tbl-programs tr {
				display: grid;
    			grid-template-columns: max-content max-content max-content 1fr;
				width: 100%;
			}
			:host table.tbl-programs th {
				grid-column: 1 / -1; 
				font-weight: bold;
			}
			:host table.tbl-programs td {
				width: auto; 
			}
			:host table.tbl-programs td:last-child {
				margin-left: auto;
			}
		}

		wa-tooltip {
			--wa-tooltip-background-color: var(--wa-color-surface-raised);
			--wa-tooltip-content-color: var(--wa-color-text-normal);
			--wa-tooltip-border-color: var(--wa-color-surface-border);
			
			/* Also match the small indicator arrow */
			--wa-tooltip-arrow-color: var(--wa-color-surface-raised);

			--max-width: 75vw;
		}
	`;

	override render() {
		const [programs_cpu, programs_mem, programs_size] = this._getProgramsRequirements(this.device_data?.logic_controller?.installed_programs);
		
		let body: TemplateResult|Array<TemplateResult>;
		if (this.device_id) {
			const device_original = this.device_data_original;
			const device = this.device_data;
			if (!device_original) {
				body = html`ERROR: Invalid \`deivce_id\``;
			} else if (!device) {
				body = html`ERROR: No device data?`;
			} else {
				device.CustomData ??= {};
				const custom_data = device.CustomData;

				const parts = [];
				if (device.logic_controller && device_original.logic_controller) {
					const logic_controller_original = device_original.logic_controller;
					const logic_controller = device.logic_controller;

					const satas_templates = this._generateTemplatesForPeripherals(logic_controller, custom_data);
					let satas_size = 0;
					if (custom_data.peripherals) {
						for (const plug_id of Object.values(custom_data.peripherals)) {
							const plug = this._data!.plugs[plug_id];
							if (plug && plug.RemovableStorageDevice) {
								satas_size += plug.RemovableStorageDevice.available_sto;
							}
						}
					}

					parts.push(html`
						<div class="flex-wrap-gap">
							<div class="flex-gap">
								<wa-number-input
									label="CPU" min="0" max="9999" step="1" .value=${live(String(logic_controller.installed_cpu))}
									appearance="filled" size="m"
									class=${logic_controller.installed_cpu == logic_controller_original.installed_cpu ? "" : "input-changed"}
									@input=${(e: InputEvent) => {
										logic_controller.installed_cpu = Number.parseInt((e.target as WaNumberInput).value ?? "0");
										this.requestUpdate();
									}}
									@blur=${(e: InputEvent) => {
										const input = e.target as WaNumberInput;
										if (!input.value) {
											logic_controller.installed_cpu = logic_controller_original.installed_cpu;
											this.requestUpdate();
										}
									}}
								></wa-number-input>
								<wa-number-input
									label="Memory" min="0" max="9999" step="1" .value=${live(String(logic_controller.installed_mem))}
									appearance="filled" size="m"
									class=${logic_controller.installed_mem == logic_controller_original.installed_mem ? "" : "input-changed"}
									@input=${(e: InputEvent) => {
										logic_controller.installed_mem = Number.parseInt((e.target as WaNumberInput).value ?? "0");
										this.requestUpdate();
									}}
									@blur=${(e: InputEvent) => {
										const input = e.target as WaNumberInput;
										if (!input.value) {
											logic_controller.installed_mem = logic_controller_original.installed_mem;
											this.requestUpdate();
										}
									}}
								></wa-number-input>
								<wa-number-input
									label="Storage" min="0" max="9999" step="1" .value=${live(String(logic_controller.installed_sto + satas_size))}
									appearance="filled" size="m"
									class=${logic_controller.installed_sto == logic_controller_original.installed_sto ? "" : "input-changed"}
									@input=${(e: InputEvent) => {
										logic_controller.installed_sto = Number.parseInt((e.target as WaNumberInput).value ?? "0") - satas_size;
										this.requestUpdate();
									}}
									@blur=${(e: InputEvent) => {
										const input = e.target as WaNumberInput;
										if (!input.value) {
											logic_controller.installed_sto = logic_controller_original.installed_sto;
											this.requestUpdate();
										}
									}}
								></wa-number-input>
							</div>
							${satas_templates.length <= 0 ? "" : html`
								<div class="flex-wrap" style="align-self: center; flex-direction: column;">
									<p class="some-title">SATA's</p>
									<div class="flex-wrap">
										${satas_templates}
									</div>
								</div>
							`}
							<p class="some-text"><span class="some-title">Bandwidth</span><br>${logic_controller.installed_nbw}/tick</p>
							<p class="some-text"><span class="some-title">Warranty</span><br>${device.base_warranty_days + (device.base_warranty_cycles * this._data!.BalanceCalc.GLOBAL_WARRANTY_PERIOD_DAYS_PER_CYCLE * this.difficulty.device_warranty_period_multiplier)} days</p>
							<p class="some-text"><span class="some-title">Wattage</span><br>${device.power_controller?.charge_rate ?? "?"}w</p>
							<p class="some-text"><span class="some-title">Mount Type</span><br>${device.mount_type}</p>
						</div>
						<wa-divider></wa-divider>
						<div>
							<div class="flex-wrap-gap" style="align-items: center;">
								<h2 style="margin: 0;">Programs</h2>
								<div class="flex-gap flex-swap-2-3" style="flex-grow: 1; margin: 0; text-align: center; align-items: center;">
									<p style="color: ${programs_cpu > logic_controller.installed_cpu ? 'red' : ''}; margin: 0;">CPU: ${programs_cpu}</p>
									<p style="color: ${programs_mem > logic_controller.installed_mem ? 'red' : ''}; margin: 0;">MEM: ${programs_mem}</p>
									<p style="color: ${programs_size > (logic_controller.installed_sto + satas_size) ? 'red' : ''}; margin: 0;">Size: ${programs_size}</p>

									${logic_controller_original.installed_programs.length > 0 && !this.device_data_is_original ? html`
										<p class="some-text" style="color: var(--wa-color-orange-90);"><small>Jailbreaker<br>Required</small></p>
									` : ""}
									
									<div style="margin-left: auto;">
										<wa-button appearance="plain" size="l"
											@click=${() => {
												logic_controller.installed_programs.push("");
												this.requestUpdate();
											}}
										>
											<wa-icon name="plus" variant="solid" label="Reset"
												style="color: green;"
											></wa-icon>
										</wa-button>
										<wa-button appearance="plain" size="l"
											@click=${() => {
												logic_controller.installed_programs = _.cloneDeep(logic_controller_original.installed_programs);
												this.requestUpdate();
											}}
										>
											<wa-icon name="rotate-left" variant="solid" label="Reset"
												style="color: ${_.isEqual(logic_controller.installed_programs, logic_controller_original.installed_programs) ? "" : "var(--wa-color-orange)"};"
											></wa-icon>
										</wa-button>
									</div>
								</div>
							</div>
							<table class="tbl-programs">
								${this._generateTemplatesForPrograms(logic_controller.installed_programs)}
							</table>
						</div>
						<wa-divider></wa-divider>
						<div>
							<div class="flex-gap" style="align-items: center;" class="wa-invert">
								<h2 style="margin: 0;">Use Stack</h2>
								<wa-icon id="my_device-use_stack-info" name="circle-question" variant="regular"></wa-icon>
								<wa-tooltip for="my_device-use_stack-info">
									<span style="color: var(--wa-color-green-95);">[PRODUCTION/LIMIT] PRODUCE_TYPES</span><br>
									<span style="color: var(--wa-color-red-80);">[-CONSUME] CONSTRAINTS&nbsp;<small><i>(CONSUME_POLICY)</i></small></span><br>
									<span style="color: var(--wa-color-red-80);"><small><i>(fragmented allowed)</i></small></span> - Partial consumption allowed, with reduced production. <br>
									<span style="color: var(--wa-color-red-80);"><small><i>(all or nothing)</i></small></span> - Requires at least CONSUME, otherwise nothing produced. <br>
								</wa-tooltip>
							</div>
							<table style="margin-left: var(--wa-content-spacing); border-collapse: separate; border-spacing: 10px 0;">
								${this._generateTemplatesForUseStack(logic_controller.installed_programs, programs_mem)}
							</table>
						</div>
					`);
				}
				body = parts;
			}
		} else {
			body = html`No device selected...`;
		}

		let dropdown_templates: TemplateResult[] = [];
		if (this._data) {
			const dropdownItemTemplate = (device_id: TniJsonDeviceId, color: string, details: TemplateResult[]) => {
				const device = this._data!.devices[device_id]!;
				return html`
					<wa-dropdown-item value=${device_id} style="color: ${color};">
						${device.product_name}
						<span slot="details">
							${details}
						</span>
					</wa-dropdown-item>
				`;
			};
			if (this.device_data_is_original || (programs_cpu <= 0 && programs_mem <= 0 && programs_size <= 0)) {
				for (const device_id in this._data.devices) {
					const device = this._data.devices[device_id]!;
					if (!device.logic_controller) continue;
					dropdown_templates.push(dropdownItemTemplate(
						device_id,
						IRRELEVANT_DEVICES.has(device_id) ? "var(--wa-color-gray)" : "",
						[
							html`<span style="display: inline-block; min-width: 5ch;">$${device.price}</span>`,
						]
					));
				}
			} else {
				const sata_options: number[] = [];
				const sata_prices: Record<number,number> = [];
				for (const plug_id in this._data.plugs) {
					if (plug_id == "components/removables/usb_stick.tscn") continue;
					const plug = this._data.plugs[plug_id]!;
					if (plug.PeripheralPlug && plug.RemovableStorageDevice) {
						if (sata_options.indexOf(plug.RemovableStorageDevice.available_sto) == -1){
							sata_options.push(plug.RemovableStorageDevice.available_sto);
							sata_prices[plug.RemovableStorageDevice.available_sto] = plug.PeripheralPlug.price;
						}
					}
				}

				const device_templates_scored: [number, number, TemplateResult][] = [];
				for (const device_id in this._data.devices) {
					const device = this._data.devices[device_id]!;
					if (!device.logic_controller) continue;

					const excess_cpu = device.logic_controller.installed_cpu - programs_cpu;
					const excess_mem = device.logic_controller.installed_mem - programs_mem;
					let excess_sto = device.logic_controller.installed_sto - programs_size;
					let sata_combination = null;
					if (excess_sto < 0) {
						const sata_combinations = this._getSataCombinations(this._getSataPorts(device.logic_controller).length);
						for (let i = 0; i < sata_combinations.length; i++) {
							const combination = sata_combinations[i]!;
							if (excess_sto + combination.storage >= 0) {
								excess_sto = excess_sto + combination.storage;
								sata_combination = combination;
								break;
							}
						}
					}
					const any_lacking = excess_cpu < 0 || excess_mem < 0 || excess_sto < 0;
					const score = IRRELEVANT_DEVICES.has(device_id) ? -Infinity
						: any_lacking ? Math.min(0, excess_cpu) + Math.min(0, excess_mem) + Math.min(0, excess_sto)
						: excess_cpu + excess_mem + excess_sto;

					const numFormat = new Intl.NumberFormat(undefined, { signDisplay: "exceptZero" });
					const total_price = device.price + (sata_combination?.price ?? 0);
					const details = [
						html`<span>${!Number.isFinite(score) ? "" : html`${numFormat.format(excess_cpu)} / ${numFormat.format(excess_mem)} / ${numFormat.format(excess_sto)}`}</span>`,
						html`&nbsp;&nbsp;`,
						html`<span style="display: inline-block; min-width: 5ch;">$${total_price}</span>`,
					];
					if (sata_combination) {
						details.push(html`<div>
							SATA: ${sata_combination.values.map(numFormat.format).join(",")}
						</div>`);
					}

					const color =
						IRRELEVANT_DEVICES.has(device_id) ? "var(--wa-color-gray)"
						: any_lacking ? "var(--wa-color-red-80)"
						: "";
					device_templates_scored.push([score, total_price, dropdownItemTemplate(device_id, color, details)])
				}
				dropdown_templates = device_templates_scored.sort(([a_score, a_price, a_template], [b_score, b_price, b_template]) => {
					// Sorted as; zero -> near zero -> negative 0 -> negative near zero
					if (a_score == b_score) return a_price - b_price;
					if (a_score < 0 && b_score >= 0) return 1;
					if (b_score < 0 && a_score >= 0) return -1;
					if (a_score < 0 && b_score < 0) return b_score - a_score; 
					return a_price - b_price;
				}).map(([score, price, template]) => template);
			}
		}

		return html`
			<wa-card class="card-header">
				<div slot="header" class="flex-wrap-gap" style="align-items: center;">
					<my-combobox size="l" style="flex-grow: 1;" value=${this.device_id ?? ""} input_value=${this.device_name ?? ""}
						@my-value-confirm=${(e: CustomEvent<MyCombobox>) => { this.device_id = e.detail.value ?? null; }}
					>
						<wa-icon name="server" slot="start"></wa-icon>
						${dropdown_templates}
					</my-combobox>
					<div style="margin-left: auto;">
						<wa-popover for="my-device-info" style="--max-width: 80ww;">
							<p>${_renderBBCode(this.device_data?.device_rendered_description ?? "Invalid device...")}</p>
						</wa-popover>
						<wa-button appearance="plain" id="my-device-info" ?disabled=${!this.device_data}>
							<wa-icon name="circle-info" variant="solid" label="Info"></wa-icon>
						</wa-button>
						<wa-button appearance="plain"
							@click=${() => this._resetDeviceData(null)}
						>
							<wa-icon name="rotate-left" variant="solid" label="Reset"
								style="color: ${this.device_data_is_original ? "" : "var(--wa-color-orange)"};"
							></wa-icon>
						</wa-button>
						<wa-button appearance="plain"
							@click=${() => this.parentElement?.appendChild(this._cloneDevice())}
						>
							<wa-icon name="clone" variant="solid" label="Clone"></wa-icon>
						</wa-button>
						<wa-button appearance="plain"
							@click=${this.remove}
						>
							<wa-icon name="trash" variant="solid" label="Remove" style="color: var(--wa-color-red);"></wa-icon>
						</wa-button>
						<wa-button-group orientation="vertical" style="vertical-align: middle;">
							<wa-button appearance="plain" size="xs" class="tiny-button" .disabled=${this.previousElementSibling ? false : true}
								@click=${() => { if (this.previousElementSibling) {
									(this.previousElementSibling as LitElement)?.requestUpdate();
									this.parentElement?.insertBefore(this, this.previousElementSibling);
									this.requestUpdate();
								} }}
							>
								<wa-icon name="chevron-up" variant="solid" label="Move Up"></wa-icon>
							</wa-button>
							<wa-button appearance="plain" size="xs" class="tiny-button" .disabled=${this.nextElementSibling ? false : true}
								@click=${() => { if (this.nextElementSibling) {
									(this.nextElementSibling as LitElement)?.requestUpdate();
									this.parentElement?.insertBefore(this.nextElementSibling, this);
									this.requestUpdate();
								} }}
							>
								<wa-icon name="chevron-down" variant="solid" label="Move Down"></wa-icon>
							</wa-button>
						</wa-button-group>
					</div>
				</div>
				${body}
			</wa-card>
		`;
	}
	
	private _generateTemplatesForPeripherals(logic_controller: TniJsonDeviceLogicController, custom_data: CustomDeviceData): TemplateResult[] {
		custom_data.peripherals ??= {};
		const templates: TemplateResult[] = [];
		for (let port_index = 0; port_index < logic_controller.ports.length; port_index++) {
			const port = logic_controller.ports[port_index]!;
			if (port.type != TniSocketType.SATA35_SLOT) continue;

			templates.push(html`
				<my-combobox
					without_clear without_filtering without_chevron placeholder="0" style="width: 40px; --wa-form-control-padding-inline: 5px;"
					value=${custom_data.peripherals[port_index] ?? ""}
					@my-value-confirm=${(e: CustomEvent<MyCombobox>) => {
						!e.detail.value ? delete custom_data.peripherals![port_index] : custom_data.peripherals![port_index] = e.detail.value;
						this.requestUpdate();
					}}
				>
					<wa-dropdown-item value="">
						<span class="my-combobox-ignore">Empty</span>
					</wa-dropdown-item>
					${this._dropdown_items_satas_templates}
				</my-combobox>
			`);
		}
		return templates;
	}
	private _getSataPorts(logic_controller: TniJsonDeviceLogicController): number[] {
		const sata_port_indices = [];
		for (let port_index = 0; port_index < logic_controller.ports.length; port_index++) {
			const port = logic_controller.ports[port_index]!;
			if (port.type != TniSocketType.SATA35_SLOT) continue;
			sata_port_indices.push(port_index);
		}
		return sata_port_indices;
	}

	private _generateTemplatesForPrograms(programs: TniJsonProgramId[]): TemplateResult[] {
		if (!this._data) return [];

		const templates: TemplateResult[] = [];
		for (let i = 0; i < programs.length; i++) {
			const program_id = programs[i]!;
			const program = this._data.programs[program_id];
			templates.push(html`
				<tr>
					<th style="width: 100%;">
						<my-combobox slot="header" style="flex-grow: 1;" value=${program_id}
							@my-value-confirm=${(e: CustomEvent<MyCombobox>) => { programs[i] = e.detail.value ?? ""; this.requestUpdate(); }}
						>
							<wa-icon name="code" slot="start"></wa-icon>
							${cache(this._dropdown_items_programs_templates)}
						</my-combobox>
					</th>
					<td style="white-space: nowrap; text-align: center;"><b>CPU:</b><br>${program?.cpu_load ?? "?"}</td>
					<td style="white-space: nowrap; text-align: center;"><b>Mem:</b><br>${program?.stack_size ?? "?"}</td>
					<td style="white-space: nowrap; text-align: center;"><b>Size:</b><br>${!program ? "?" : _renderProgramSize(program)}</td>
					<td style="white-space: nowrap;">
						<wa-popover for="my-device-program-info-${i}" style="--max-width: 80ww;">
							<p>${_renderBBCode(program?.rendered_description ?? "Invalid program...")}</p>
						</wa-popover>
						<wa-button appearance="plain" id="my-device-program-info-${i}">
							<wa-icon name="circle-info" variant="solid" label="Info"></wa-icon>
						</wa-button>
						<wa-button appearance="plain"
							@click=${() => { programs.splice(i, 1); this.requestUpdate(); }}
						>
							<wa-icon name="trash" variant="solid" label="Remove" style="color: var(--wa-color-red);"></wa-icon>
						</wa-button>
						<wa-button-group orientation="vertical" style="vertical-align: middle;">
							<wa-button appearance="plain" size="xs" class="tiny-button" .disabled=${i <= 0}
								@click=${() => { if (i > 0) {
									[programs[i], programs[i-1]] = [programs[i-1]!, programs[i]!];
									this.requestUpdate();
								} }}
							>
								<wa-icon name="chevron-up" variant="solid" label="Move Up"></wa-icon>
							</wa-button>
							<wa-button appearance="plain" size="xs" class="tiny-button" .disabled=${i >= programs.length-1}
								@click=${() => { if (i < programs.length) {
									[programs[i], programs[i+1]] = [programs[i+1]!, programs[i]!];
									this.requestUpdate();
								} }}
							>
								<wa-icon name="chevron-down" variant="solid" label="Move Down"></wa-icon>
							</wa-button>
						</wa-button-group>
					</td>
				</tr>
			`);
		}
		return templates;
	}

	private _generateTemplatesForUseStack(programs: TniJsonProgramId[], used_mem: number) {
		if (!this._data) return [];

		const installed_cpu = this.device_data?.logic_controller?.installed_cpu ?? 0;
		const installed_mem = this.device_data?.logic_controller?.installed_mem ?? 0;
		const installed_sto = this.device_data?.logic_controller?.installed_sto ?? 0;
		const free_mem = installed_mem - used_mem;

		const templates: TemplateResult[] = [];
		const addConsumeTemplate = (use_config_id: TniJsonUseConfigId, consume: number, policy: TniTraversalConsumptionPolicy) => {
			const use_config = this._data!.use_configs[use_config_id];
			if (!use_config) {
				console.warn("Encountered missing use_config:", use_config_id);
				return;
			}
			const policy_name = 
				consume <= 1 ? ""
				: policy == TniTraversalConsumptionPolicy.ALL_OR_NOTHING ? "all or nothing"
				: policy == TniTraversalConsumptionPolicy.FRAGMENTED_USE_ALLOWED ? "fragmented allowed"
				: policy;
			let better_descript = use_config.constraint_descript;
			if (better_descript.startsWith("(") && better_descript.endsWith(")") && (better_descript.match(/[()]/g) || []).length == 2) {
				better_descript = better_descript.substring(1, better_descript.length-2);
			}
			templates.push(html`
				<tr style="color: var(--wa-color-red-80);">
					<td style="float: right;"><code><b>[${-consume}]</b></code></td>
					<td><code>
						<b>${better_descript}</b>
						${policy_name.length > 0 ? html`&nbsp;<small><i>(${policy_name})</i></small>` : ""}
					</code></td>
				</tr>
			`)
		};
		const addProduceTemplate = (use_config_id: TniJsonUseConfigId, produce: number, limit_type: TniProduceLimitType, limit_factor: number, produce_factor: number) => {
			const use_config = this._data!.use_configs[use_config_id];
			if (!use_config) {
				console.warn("Encountered missing use_config:", use_config_id);
				return;
			}
			let limit: string;
			switch (limit_type) {
				case TniProduceLimitType.LIMITED_BY_LIMIT_FACTOR:
					limit = String(limit_factor);
					break;
				case TniProduceLimitType.LIMITED_BY_PRODUCE_FACTOR:
					limit = String(produce_factor);
					break;
				case TniProduceLimitType.LIMITED_BY_TARGET_TOTAL_CPU:
					limit = `${installed_cpu} (cpu)`;
					break;
				case TniProduceLimitType.LIMITED_BY_TARGET_TOTAL_MEM:
					limit = `${installed_mem} (mem)`;
					break;
				case TniProduceLimitType.LIMITED_BY_TARGET_TOTAL_STORAGE:
					limit = `${installed_sto} (sto)`;
					break;
				case TniProduceLimitType.LIMITED_BY_TARGET_FREE_MEMORY:
					limit = `${free_mem} (free mem)`;
					break;
				default:
					limit = "?";
					break;
			}

			templates.push(html`
				<tr style="color: var(--wa-color-green-95);">
					<td style="float: right;"><b><code>[${produce}/${limit}]</code></b></td>
					<td><b><code>${use_config.use_value}</code></b></td>
				</tr>
			`)
		};
		for (let i = 0; i < programs.length; i++) {
			const program_id = programs[i]!;
			const program = this._data.programs[program_id];
			if (!program) continue;

			if (program.AlwaysProduce) {
				addProduceTemplate(program.AlwaysProduce.produce_use_config, program.AlwaysProduce.produce_factor, program.AlwaysProduce.produce_limit_type, program.AlwaysProduce.limit_factor, program.AlwaysProduce.produce_factor);
			}
			if (program.TraversalConsume) {
				addConsumeTemplate(program.TraversalConsume.consume_use_config, program.TraversalConsume.consume_factor, program.TraversalConsume.consumption_policy);
				addProduceTemplate(program.TraversalConsume.produce_use_config, program.TraversalConsume.produce_factor, program.TraversalConsume.produce_limit_type, program.TraversalConsume.limit_factor, program.TraversalConsume.produce_factor);
			}
		}
		return templates;
	}

	override willUpdate(changedProperties: Map<PropertyKey, unknown>) {
		super.willUpdate(changedProperties);

		if (changedProperties.has("_data")) {
			this.__recalc_satas();
		}

		const old_device_id = changedProperties.get("device_id") as TniJsonDeviceId ?? this.device_id;
		if (changedProperties.has('device_id')) {
			if (this._data && this.device_id) {
				const device = this.device_data_original;
				if (!device) {
					const entry = Object.entries(this._data.devices).find(([key, val]) => val.product_name === this.device_id);
					if (entry) {
						this.device_id = entry[0];
					} else {
						this.device_id = null;
					}
				}
			}
		}
		if (!this.device_data || this.device_id != old_device_id)
			this._resetDeviceData(old_device_id);
	}

	override updated(changedProperties: PropertyValues): void {
		super.updated(changedProperties);

		this.dispatchEvent(new Event('my-device-updated', {bubbles: true, composed: true}));
	}

	// `previousDeviceId` should be null to enforce a full reset.
	private _resetDeviceData(previousDeviceId: string|null) {
		const data_original_prev = this._data && previousDeviceId ? this._data.devices[previousDeviceId] ?? null : null;
		const data_original = this.device_data_original;
		if (data_original) {
			const old_data = this.device_data;
			this.device_data = structuredClone(data_original);
			this.device_data.CustomData = { };

			if (old_data && old_data.logic_controller && data_original.logic_controller) {
				const [programs_cpu, programs_mem, programs_size] = this._getProgramsRequirements(old_data.logic_controller.installed_programs);
				let excess_sto = data_original.logic_controller.installed_sto - programs_size;
				if (excess_sto < 0) {
					let sata_combination = null;
					const sata_ports = this._getSataPorts(data_original.logic_controller)
					if (sata_ports.length > 0) {
						const sata_combinations = this._getSataCombinations(sata_ports.length);
						for (let i = 0; i < sata_combinations.length; i++) {
							const combination = sata_combinations[i]!;
							if (excess_sto + combination.storage >= 0) {
								excess_sto = excess_sto + combination.storage;
								sata_combination = combination;
								break;
							}
						}
						if (sata_combination) {
							this.device_data.CustomData.peripherals = {};
							for (let i = 0; i < sata_combination.plug_ids.length; i++) {
								const plug_id = sata_combination.plug_ids[i]!;
								this.device_data.CustomData.peripherals[sata_ports[i]!] = plug_id;
							}
						}
					}
				}
			}

			if (this.device_data_partial) {
				_.merge(this.device_data, this.device_data_partial);
				this.device_data_partial = null;
			}

			if (previousDeviceId && this.device_data && old_data && data_original_prev) {
				if (this.device_data.logic_controller && old_data.logic_controller && data_original_prev.logic_controller) {
					if (!_.isEqual(old_data.logic_controller.installed_programs, data_original_prev.logic_controller.installed_programs)) {
						this.device_data.logic_controller.installed_programs = old_data.logic_controller.installed_programs;
					}
				}
			}
		} else {
			this.device_data = null;
		}
		this.requestUpdate("device_data");
	}

	private _cloneDevice() {
		const clone = this.cloneNode() as MyDevice;
		clone.device_data = structuredClone(this.device_data);
		return clone;
	}

	serialize() {
		return {
			device_id: this.device_id,
			// device_data: this.device_data_is_original ? null : this.device_data,
			device_data_diff: this.device_data &&this.device_data_original && !this.device_data_is_original
				? _getDeepDiff(this.device_data, this.device_data_original)
				: null,
		};
	}
	deserialize(data: ReturnType<typeof this.serialize>) {
		console.debug("MyDevice.deserialize", data);
		this.device_id = typeof data.device_id === "string" ? data.device_id : null;
		// this.device_data = typeof data.device_data == "object" ? data.device_data : null;
		if (typeof data.device_data_diff === "object") {
			this.device_data_partial = data.device_data_diff;
		}
		this.requestUpdate();
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"my-device": MyDevice;
	}
}
