import { LitElement, PropertyValues, TemplateResult, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { cache } from 'lit/directives/cache.js';
import { createRef, ref, Ref } from 'lit/directives/ref.js';
import { live } from 'lit/directives/live.js';
import { consume } from '@lit/context';

import _ from "lodash";

import { TniJsonData, TniJsonDevice, TniJsonDeviceId, TniJsonProgramId } from 'raw/data-format2-spec';

import { dataContext } from "../data-context.js";
import { MyCombobox } from 'assets/js/components/my-combobox/my-combobox.js';
import { WaNumberInput } from '@awesome.me/webawesome/dist/ssr/all.js';


function getDeepDiff<T extends Record<string, any>>(object: T, base: Record<string, any>): Partial<T> {
	return _.transform(object, (result: any, value: any, key: string) => {
		if (!_.isEqual(value, base[key])) {
			result[key] = (_.isObject(value) && _.isObject(base[key]))
				? getDeepDiff(value as Record<string, any>, base[key] as Record<string, any>)
				: value;
		}
	});
}

@customElement('my-device')
export class MyDevice extends LitElement {
	comboboxRef: Ref<MyCombobox> = createRef();
	get combobox(): MyCombobox { return this.comboboxRef.value!; }

	@consume({ context: dataContext, subscribe: true })
	@state()
	private _data!: TniJsonData|null;

	@property({ reflect: true })
	device_name: string|null = null;
	@property({ reflect: true })
	device_id: TniJsonDeviceId|null = null;

	get device_data_original() {
		return this._data && this.device_id ? this._data.devices[this.device_id] ?? null : null;
	}
	get device_data_is_original() {
		return _.isEqual(this.device_data_original, this.device_data);
	}
	@state()
	device_data: TniJsonDevice|null = null;

	// Reset to `null` upon merge.
	device_data_partial: Partial<TniJsonDevice>|null = null;

	private __dropdown_items_devices_templates: TemplateResult<1>[] = [];
	private _dropdown_items_devices_templates_data?: any;
	get _dropdown_items_devices_templates(): TemplateResult<1>[] {
		if (this._dropdown_items_devices_templates_data !== this._data) {
			this._dropdown_items_devices_templates_data = this._data;
			this.__dropdown_items_devices_templates = [];
			if (this._data) {
				for (const device_id in this._data.devices) {
					const device = this._data.devices[device_id]!;
					this.__dropdown_items_devices_templates.push(html`<wa-dropdown-item value=${device_id}>${device.product_name}</wa-dropdown-item>`)
				}
			}
		}
		return this.__dropdown_items_devices_templates;
	}

	private __dropdown_items_programs_templates: TemplateResult<1>[] = [];
	private _dropdown_items_programs_templates_data?: any;
	get _dropdown_items_programs_templates(): TemplateResult<1>[] {
		if (this._dropdown_items_programs_templates_data !== this._data) {
			this._dropdown_items_programs_templates_data = this._data;
			this.__dropdown_items_programs_templates = [];
			if (this._data) {
				for (const program_id in this._data.programs) {
					const program = this._data.programs[program_id]!;
					if (program.release_name.length > 0)
						this.__dropdown_items_programs_templates.push(html`<wa-dropdown-item value=${program_id}>${program.release_name}</wa-dropdown-item>`)
				}
			}
		}
		return this.__dropdown_items_programs_templates;
	}

	static override styles = css`
		wa-number-input::part(stepper) {
			aspect-ratio: unset
		}
		wa-number-input::part(start),
		wa-number-input::part(end) {
			display: none
		}
		wa-number-input::part(input) {
			padding: 0;
			width: max-content;
		}
		wa-number-input {
			width: 100px;
			--wa-content-spacing: 0;
		}
		
		:host .input-changed::part(input) {
			color: var(--wa-color-yellow);
		}

		:host .flex-and-gap {
			display: flex;
			gap: var(--wa-content-spacing);
		}

		:host table {
			border-collapse: collapse;
			width: 100%;
		}
		:host th, td {
			padding-right: var(--wa-content-spacing);
		}
		:host th:last-child, td:last-child {
			padding-right: 0;
		}
	`;

	override render() {
		let body: TemplateResult|Array<TemplateResult>;
		if (this.device_id) {
			const device_original = this.device_data_original;
			const device = this.device_data;
			if (!device_original) {
				body = html`ERROR: Invalid \`deivce_id\``;
			} else if (!device) {
				body = html`ERROR BUG: Component needs updating...`;
			} else {
				const parts = [];
				if (device.logic_controller && device_original.logic_controller) {
					const logic_controller_original = device_original.logic_controller;
					const logic_controller = device.logic_controller;

					let programs_cpu = 0;
					let programs_mem = 0;
					let programs_size = 0;
					if (this._data) {
						logic_controller.installed_programs.forEach((program_id) => {
							const program = this._data?.programs[program_id];
							if (program) {
								programs_cpu += program.cpu_load;
								programs_mem += program.stack_size;
								programs_size += program.code_size + program.data_size;
							}
						});
					}

					parts.push(html`
						<div class="flex-and-gap">
							<wa-number-input
								label="CPU" min="0" max="9999" step="1" .value=${live(String(logic_controller.installed_cpu))}
								appearance="filled" size="l"
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
								appearance="filled" size="l"
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
								label="Storage" min="0" max="9999" step="1" .value=${live(String(logic_controller.installed_sto))}
								appearance="filled" size="l"
								class=${logic_controller.installed_sto == logic_controller_original.installed_sto ? "" : "input-changed"}
								@input=${(e: InputEvent) => {
									logic_controller.installed_sto = Number.parseInt((e.target as WaNumberInput).value ?? "0");
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
							<!-- <div></div>
							<wa-number-input
								label="Bandwidth" min="0" max="9999" step="1" .value=${live(String(logic_controller.installed_nbw))}
								appearance="filled" size="l"
								class=${logic_controller.installed_nbw == logic_controller_original.installed_nbw ? "" : "input-changed"}
								@input=${(e: InputEvent) => {
									logic_controller.installed_nbw = Number.parseInt((e.target as WaNumberInput).value ?? "0");
									this.requestUpdate();
								}}
								@blur=${(e: InputEvent) => {
									const input = e.target as WaNumberInput;
									if (!input.value) {
										logic_controller.installed_nbw = logic_controller_original.installed_nbw;
										this.requestUpdate();
									}
								}}
							></wa-number-input> -->
						</div>
						<wa-divider></wa-divider>
						<div>
							<div style="display: flex; align-items: center;">
								<div style="display: flex; align-items: center; gap: var(--wa-content-spacing);">
									<h2 style="margin: 0;">Programs</h2>
									<p style="margin: 0; color: ${programs_cpu > logic_controller.installed_cpu ? 'red' : ''}">CPU: ${programs_cpu}</p>
									<p style="margin: 0; color: ${programs_mem > logic_controller.installed_mem ? 'red' : ''}">MEM: ${programs_mem}</p>
									<p style="margin: 0; color: ${programs_size > logic_controller.installed_sto ? 'red' : ''}">Size: ${programs_size}</p>
								</div>
								<div style="margin-left: auto;"></div>
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
							<table>
								${this._generateTemplatesForPrograms(logic_controller.installed_programs)}
							</table>
						</div>
					`);
				}
				body = parts;
			}
		} else {
			body = html`No device selected...`;
		}

		return html`
			<wa-card class="card-header">
				<my-combobox ${ref(this.comboboxRef)} size="l" slot="header" style="flex-grow: 1;" value=${this.device_name ?? ""}
					@my-single-match=${(e: CustomEvent<string|null>) => { this.device_id = e.detail }}
					@my-value-confirm=${(e: CustomEvent<string>) => { this.device_id = e.detail }}
				>
					<wa-icon name="server" slot="start"></wa-icon>
					${cache(this._dropdown_items_devices_templates)}
				</my-combobox>
				<wa-button appearance="plain" slot="header-actions"
					@click=${() => this._resetDeviceData(null)}
				>
					<wa-icon name="rotate-left" variant="solid" label="Reset"
						style="color: ${this.device_data_is_original ? "" : "var(--wa-color-orange)"};"
					></wa-icon>
				</wa-button>
				<wa-button appearance="plain" slot="header-actions"
					@click=${() => this.parentElement?.appendChild(this._cloneDevice())}
				>
					<wa-icon name="clone" variant="solid" label="Clone"></wa-icon>
				</wa-button>
				<wa-button appearance="plain" slot="header-actions"
					@click=${this.remove}
				>
					<wa-icon name="trash" variant="solid" label="Remove" style="color: var(--wa-color-red);"></wa-icon>
				</wa-button>
				${body}
			</wa-card>
		`;
	}

	private _generateTemplatesForPrograms(programs: TniJsonProgramId[]): TemplateResult[] {
		if (!this._data) return [];

		const templates: TemplateResult[] = [];
		for (let i = 0; i < programs.length; i++) {
			const program_id = programs[i]!;
			const program = this._data?.programs[program_id];
			templates.push(html`
				<tr>
					<th style="width: 100%;">
						<my-combobox slot="header" style="flex-grow: 1;" value=${program?.release_name ?? ""}
							@my-single-match=${(e: CustomEvent<string|null>) => { programs[i] = e.detail ?? ""; this.requestUpdate(); }}
							@my-value-confirm=${(e: CustomEvent<string>) => { programs[i] = e.detail ?? ""; this.requestUpdate(); }}
						>
							<wa-icon name="code" slot="start"></wa-icon>
							${cache(this._dropdown_items_programs_templates)}
						</my-combobox>
					</th>
					<td style="white-space: nowrap; text-align: center;"><b>CPU:</b><br>${String(program?.cpu_load ?? "?")}</td>
					<td style="white-space: nowrap; text-align: center;"><b>Mem:</b><br>${String(program?.stack_size ?? "?")}</td>
					<td style="white-space: nowrap; text-align: center;"><b>Size:</b><br>${!program ? "?" : `${program.code_size}${program.data_size ? `+${program.data_size}=${program.code_size+program.data_size}` : ""}`}</td>
					<td>
						<wa-button appearance="plain"
							@click=${() => { programs.splice(i, 1); this.requestUpdate(); }}
						>
							<wa-icon name="trash" variant="solid" label="Remove" style="color: var(--wa-color-red);"></wa-icon>
						</wa-button>
					</td>
				</tr>
			`);
		}
		return templates;
	}

	override willUpdate(changedProperties: Map<PropertyKey, unknown>) {
		super.willUpdate(changedProperties);

		const old_device_id = changedProperties.get("device_id") as TniJsonDeviceId ?? this.device_id;
		if ((!this.device_id && this.device_name) || (changedProperties.has('device_name') && !changedProperties.has('device_id'))) {
			this.device_id = null;
			if (this._data) {
				const entry = Object.entries(this._data.devices).find(([key, val]) => val.product_name === this.device_name || key === this.device_name);
				if (entry) {
					this.device_id = entry[0];
				}
			}
			if (!changedProperties.has("device_data") || !this.device_data)
				this._resetDeviceData(old_device_id);
		} else if ((this.device_id && !this.device_name) || changedProperties.has('device_id')) {
			this.device_name = this.device_id ? this._data?.devices[this.device_id]?.product_name ?? null : null;
			if (!changedProperties.has("device_data") || !this.device_data)
				this._resetDeviceData(old_device_id);
		}
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
				? getDeepDiff(this.device_data, this.device_data_original)
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
