var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { cache } from 'lit/directives/cache.js';
import { createRef, ref } from 'lit/directives/ref.js';
import { live } from 'lit/directives/live.js';
import { consume } from '@lit/context';
import _ from "lodash";
import { TniProduceLimitType } from 'raw/data-format2-spec.js';
import { dataContext } from "../data-context.js";
function getDeepDiff(object, base) {
    return _.transform(object, (result, value, key) => {
        if (!_.isEqual(value, base[key])) {
            result[key] = (_.isObject(value) && _.isObject(base[key]))
                ? getDeepDiff(value, base[key])
                : value;
        }
    });
}
// Converts TNI BBCode into a html template.
function _renderBBCode(description) {
    const re = /(\n)|\[(\w+)=(.*?)\]|\[\/(\w+)\]/g;
    const stack = [[]];
    const tag_stack = [];
    let lastEndPos = 0;
    while (re.lastIndex < description.length) {
        const startPos = re.lastIndex;
        const match = re.exec(description);
        const endPos = re.lastIndex;
        if (!match)
            break;
        lastEndPos = endPos;
        const matchStartPos = endPos - match[0].length;
        if (startPos < matchStartPos) {
            stack[stack.length - 1].push(html `${description.slice(startPos, matchStartPos)}`);
        }
        if (match[0] == "\n") {
            stack[stack.length - 1].push(html `<br>`);
        }
        else if (match[2]) {
            const value = match[3];
            switch (match[2]) {
                case "color":
                    stack.push([]);
                    tag_stack.push([match[2], value]);
                    break;
                default:
                    break;
            }
        }
        else if (match[4]) {
            if (tag_stack.length <= 0 && stack.length >= 2)
                continue;
            const elems = stack.pop();
            const [tag, value] = tag_stack.pop();
            switch (tag) {
                case "color":
                    stack[stack.length - 1].push(html `<span style="color: ${value};">${elems}</span>`);
                    break;
                default:
                    break;
            }
        }
    }
    if (lastEndPos < description.length) {
        stack[stack.length - 1].push(html `${description.slice(lastEndPos, description.length)}`);
    }
    return stack[0];
}
function _renderProgramSize(program) {
    return `${program.code_size}${program.data_size ? `+${program.data_size}=${program.code_size + program.data_size}` : ""}`;
}
let MyDevice = class MyDevice extends LitElement {
    constructor() {
        super(...arguments);
        this.comboboxRef = createRef();
        this.device_name = null;
        this.device_id = null;
        this.device_data = null;
        // Reset to `null` upon merge.
        this.device_data_partial = null;
        this.__dropdown_items_programs_templates = [];
    }
    get combobox() { return this.comboboxRef.value; }
    get device_data_original() {
        return this._data && this.device_id ? this._data.devices[this.device_id] ?? null : null;
    }
    get device_data_is_original() {
        return _.isEqual(this.device_data_original, this.device_data);
    }
    get _dropdown_items_programs_templates() {
        if (this._dropdown_items_programs_templates_data !== this._data) {
            this._dropdown_items_programs_templates_data = this._data;
            this.__dropdown_items_programs_templates = [];
            if (this._data) {
                for (const program_id in this._data.programs) {
                    const program = this._data.programs[program_id];
                    if (program.release_name.length > 0)
                        this.__dropdown_items_programs_templates.push(html `<wa-dropdown-item value=${program_id}>${program.release_name}<span slot="details">${program.cpu_load}/${program.stack_size}/${program.code_size + program.data_size}</span></wa-dropdown-item>`);
                }
            }
        }
        return this.__dropdown_items_programs_templates;
    }
    static { this.styles = css `
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
			gap: calc(var(--wa-content-spacing) / 2);
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
	`; }
    render() {
        let programs_cpu = 0;
        let programs_mem = 0;
        let programs_size = 0;
        let body;
        if (this.device_id) {
            const device_original = this.device_data_original;
            const device = this.device_data;
            if (!device_original) {
                body = html `ERROR: Invalid \`deivce_id\``;
            }
            else if (!device) {
                body = html `ERROR BUG: Component needs updating...`;
            }
            else {
                const parts = [];
                if (device.logic_controller && device_original.logic_controller) {
                    const logic_controller_original = device_original.logic_controller;
                    const logic_controller = device.logic_controller;
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
                    parts.push(html `
						<div class="flex-and-gap">
							<wa-number-input
								label="CPU" min="0" max="9999" step="1" .value=${live(String(logic_controller.installed_cpu))}
								appearance="filled" size="m"
								class=${logic_controller.installed_cpu == logic_controller_original.installed_cpu ? "" : "input-changed"}
								@input=${(e) => {
                        logic_controller.installed_cpu = Number.parseInt(e.target.value ?? "0");
                        this.requestUpdate();
                    }}
								@blur=${(e) => {
                        const input = e.target;
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
								@input=${(e) => {
                        logic_controller.installed_mem = Number.parseInt(e.target.value ?? "0");
                        this.requestUpdate();
                    }}
								@blur=${(e) => {
                        const input = e.target;
                        if (!input.value) {
                            logic_controller.installed_mem = logic_controller_original.installed_mem;
                            this.requestUpdate();
                        }
                    }}
							></wa-number-input>
							<wa-number-input
								label="Storage" min="0" max="9999" step="1" .value=${live(String(logic_controller.installed_sto))}
								appearance="filled" size="m"
								class=${logic_controller.installed_sto == logic_controller_original.installed_sto ? "" : "input-changed"}
								@input=${(e) => {
                        logic_controller.installed_sto = Number.parseInt(e.target.value ?? "0");
                        this.requestUpdate();
                    }}
								@blur=${(e) => {
                        const input = e.target;
                        if (!input.value) {
                            logic_controller.installed_sto = logic_controller_original.installed_sto;
                            this.requestUpdate();
                        }
                    }}
							></wa-number-input>
							<!-- <div></div>
							<wa-number-input
								label="Bandwidth" min="0" max="9999" step="1" .value=${live(String(logic_controller.installed_nbw))}
								appearance="filled" size="m"
								class=${logic_controller.installed_nbw == logic_controller_original.installed_nbw ? "" : "input-changed"}
								@input=${(e) => {
                        logic_controller.installed_nbw = Number.parseInt(e.target.value ?? "0");
                        this.requestUpdate();
                    }}
								@blur=${(e) => {
                        const input = e.target;
                        if (!input.value) {
                            logic_controller.installed_nbw = logic_controller_original.installed_nbw;
                            this.requestUpdate();
                        }
                    }}
							></wa-number-input> -->
						</div>
						<wa-divider></wa-divider>
						<div>
							<div style="display: flex; flex-wrap: wrap; align-items: center; gap: var(--wa-content-spacing);">
								<h2 style="margin: 0;">Programs</h2>
								<div style="flex-grow: 1; margin: 0; text-align: center; display: flex; align-items: center; gap: var(--wa-content-spacing);">
									<p style="color: ${programs_cpu > logic_controller.installed_cpu ? 'red' : ''}">CPU: ${programs_cpu}</p>
									<p style="color: ${programs_mem > logic_controller.installed_mem ? 'red' : ''}">MEM: ${programs_mem}</p>
									<p style="color: ${programs_size > logic_controller.installed_sto ? 'red' : ''}">Size: ${programs_size}</p>
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
							<div style="display: flex; align-items: center; gap: var(--wa-content-spacing);">
								<h2 style="margin: 0;">Use Stack</h2>
								<i><code>[PRODUCTION/LIMIT] PRODUCE_TYPES<br></code></i>
							</div>
							<table style="margin-left: var(--wa-content-spacing); border-collapse: separate; border-spacing: 10px 0;">
								${this._generateTemplatesForUseStack(logic_controller.installed_programs, programs_mem)}
							</table>
						</div>
					`);
                }
                body = parts;
            }
        }
        else {
            body = html `No device selected...`;
        }
        const dropdown_templates = [];
        if (this._data) {
            for (const device_id in this._data.devices) {
                const device = this._data.devices[device_id];
                dropdown_templates.push(html `<wa-dropdown-item value=${device_id}>${device.product_name}<span slot="details">$${device.price}</span></wa-dropdown-item>`);
            }
        }
        return html `
			<wa-card class="card-header">
				<div slot="header" style="display: flex; align-items: center; flex-wrap: wrap; gap: var(--wa-content-spacing);">
					<my-combobox ${ref(this.comboboxRef)} size="l" style="flex-grow: 1;" value=${this.device_name ?? ""}
						@my-single-match=${(e) => { this.device_id = e.detail; }}
						@my-value-confirm=${(e) => { this.device_id = e.detail; }}
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
					</div>
				</div>
				${body}
			</wa-card>
		`;
    }
    _generateTemplatesForPrograms(programs) {
        if (!this._data)
            return [];
        const templates = [];
        for (let i = 0; i < programs.length; i++) {
            const program_id = programs[i];
            const program = this._data.programs[program_id];
            templates.push(html `
				<tr>
					<th style="width: 100%;">
						<my-combobox slot="header" style="flex-grow: 1;" value=${program?.release_name ?? ""}
							@my-single-match=${(e) => { programs[i] = e.detail ?? ""; this.requestUpdate(); }}
							@my-value-confirm=${(e) => { programs[i] = e.detail ?? ""; this.requestUpdate(); }}
						>
							<wa-icon name="code" slot="start"></wa-icon>
							${cache(this._dropdown_items_programs_templates)}
						</my-combobox>
					</th>
					<td style="white-space: nowrap; text-align: center;"><b>CPU:</b><br>${String(program?.cpu_load ?? "?")}</td>
					<td style="white-space: nowrap; text-align: center;"><b>Mem:</b><br>${String(program?.stack_size ?? "?")}</td>
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
					</td>
				</tr>
			`);
        }
        return templates;
    }
    _generateTemplatesForUseStack(programs, used_mem) {
        if (!this._data)
            return [];
        const installed_cpu = this.device_data?.logic_controller?.installed_cpu ?? 0;
        const installed_mem = this.device_data?.logic_controller?.installed_mem ?? 0;
        const installed_sto = this.device_data?.logic_controller?.installed_sto ?? 0;
        const free_mem = installed_mem - used_mem;
        const templates = [];
        for (let i = 0; i < programs.length; i++) {
            const program_id = programs[i];
            const program = this._data.programs[program_id];
            if (!program)
                continue;
            let data = null;
            if (program.AlwaysProduce) {
                data = program.AlwaysProduce;
            }
            if (program.TraversalConsume) {
                data = program.TraversalConsume;
            }
            if (data) {
                const use_config = this._data.use_configs[data.produce_use_config];
                if (!use_config) {
                    console.warn("Encountered missing use_config:", data.produce_use_config);
                    continue;
                }
                const produce = data.produce_factor;
                let limit;
                switch (data.produce_limit_type) {
                    case TniProduceLimitType.LIMITED_BY_LIMIT_FACTOR:
                        limit = String(data.limit_factor);
                        break;
                    case TniProduceLimitType.LIMITED_BY_PRODUCE_FACTOR:
                        limit = String(data.produce_factor);
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
                templates.push(html `
					<tr>
						<td style="float: right;"><b><code>[${produce}/${limit}]</code></b></td>
						<td><b><code>${use_config.use_value}</code></b></td>
					</tr>
				`);
            }
        }
        return templates;
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const old_device_id = changedProperties.get("device_id") ?? this.device_id;
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
        }
        else if ((this.device_id && !this.device_name) || changedProperties.has('device_id')) {
            this.device_name = this.device_id ? this._data?.devices[this.device_id]?.product_name ?? null : null;
            if (!changedProperties.has("device_data") || !this.device_data)
                this._resetDeviceData(old_device_id);
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        this.dispatchEvent(new Event('my-device-updated', { bubbles: true, composed: true }));
    }
    // `previousDeviceId` should be null to enforce a full reset.
    _resetDeviceData(previousDeviceId) {
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
        }
        else {
            this.device_data = null;
        }
        this.requestUpdate("device_data");
    }
    _cloneDevice() {
        const clone = this.cloneNode();
        clone.device_data = structuredClone(this.device_data);
        return clone;
    }
    serialize() {
        return {
            device_id: this.device_id,
            // device_data: this.device_data_is_original ? null : this.device_data,
            device_data_diff: this.device_data && this.device_data_original && !this.device_data_is_original
                ? getDeepDiff(this.device_data, this.device_data_original)
                : null,
        };
    }
    deserialize(data) {
        console.debug("MyDevice.deserialize", data);
        this.device_id = typeof data.device_id === "string" ? data.device_id : null;
        // this.device_data = typeof data.device_data == "object" ? data.device_data : null;
        if (typeof data.device_data_diff === "object") {
            this.device_data_partial = data.device_data_diff;
        }
        this.requestUpdate();
    }
};
__decorate([
    consume({ context: dataContext, subscribe: true }),
    state()
], MyDevice.prototype, "_data", void 0);
__decorate([
    property({ reflect: true })
], MyDevice.prototype, "device_name", void 0);
__decorate([
    property({ reflect: true })
], MyDevice.prototype, "device_id", void 0);
__decorate([
    state()
], MyDevice.prototype, "device_data", void 0);
MyDevice = __decorate([
    customElement('my-device')
], MyDevice);
export { MyDevice };
//# sourceMappingURL=my-device.js.map