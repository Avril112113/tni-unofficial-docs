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
let MyDevice = class MyDevice extends LitElement {
    constructor() {
        super(...arguments);
        this.comboboxRef = createRef();
        this.device_name = null;
        this.device_id = null;
        this.device_data = null;
        // Reset to `null` upon merge.
        this.device_data_partial = null;
        this.__dropdown_item_templates = [];
    }
    get combobox() { return this.comboboxRef.value; }
    get device_data_original() {
        return this._data && this.device_id ? this._data.devices[this.device_id] ?? null : null;
    }
    get device_data_is_original() {
        return _.isEqual(this.device_data_original, this.device_data);
    }
    get _dropdown_item_templates() {
        if (this.__dropdown_item_templates_data !== this._data) {
            this.__dropdown_item_templates_data = this._data;
            this.__dropdown_item_templates = [];
            if (this._data) {
                for (const device_id in this._data.devices) {
                    const device = this._data.devices[device_id];
                    this.__dropdown_item_templates.push(html `<wa-dropdown-item value=${device_id}>${device.product_name}</wa-dropdown-item>`);
                }
            }
        }
        return this.__dropdown_item_templates;
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
		
		:host .input-changed::part(input) {
			color: var(--wa-color-yellow);
		}

		:host .my-flex {
			display: flex;
			gap: var(--wa-content-spacing);
		}

		/* wa-button::part(label) {
			color: var(--wa-color-red);
		} */
	`; }
    render() {
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
                    parts.push(html `
						<div class="my-flex">
							<wa-number-input
								label="CPU" min="0" max="9999" step="1" .value=${live(String(logic_controller.installed_cpu))}
								appearance="filled" size="l" style="max-width: 100px; --wa-content-spacing: 0;"
								class=${logic_controller.installed_cpu == logic_controller_original.installed_cpu ? "" : "input-changed"}
								@input=${(e) => {
                        logic_controller.installed_cpu = Number.parseInt(e.target.value ?? "0");
                        this.requestUpdate();
                    }}
							></wa-number-input>
							<wa-number-input
								label="Memory" min="0" max="9999" step="1" .value=${live(String(logic_controller.installed_mem))}
								appearance="filled" size="l" style="max-width: 100px; --wa-content-spacing: 0;"
								class=${logic_controller.installed_mem == logic_controller_original.installed_mem ? "" : "input-changed"}
								@input=${(e) => {
                        logic_controller.installed_mem = Number.parseInt(e.target.value ?? "0");
                        this.requestUpdate();
                    }}
							></wa-number-input>
							<wa-number-input
								label="Storage" min="0" max="9999" step="1" .value=${live(String(logic_controller.installed_sto))}
								appearance="filled" size="l" style="max-width: 100px; --wa-content-spacing: 0;"
								class=${logic_controller.installed_sto == logic_controller_original.installed_sto ? "" : "input-changed"}
								@input=${(e) => {
                        logic_controller.installed_sto = Number.parseInt(e.target.value ?? "0");
                        this.requestUpdate();
                    }}
							></wa-number-input>
						</div>
					`);
                }
                body = parts;
            }
        }
        else {
            body = html `No device selected...`;
        }
        return html `
			<wa-card class="card-header">
				<my-combobox ${ref(this.comboboxRef)} slot="header" style="flex-grow: 1;" value=${this.device_name ?? ""}
					@my-single-match=${(e) => { this.device_id = e.detail; }}
					@my-value-confirm=${(e) => { this.device_id = e.detail; }}
				>
					${cache(this._dropdown_item_templates)}
				</my-combobox>
				<wa-button appearance="plain" slot="header-actions"
					@click=${this._resetDeviceData}
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
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if ((!this.device_id && this.device_name) || (changedProperties.has('device_name') && !changedProperties.has('device_id'))) {
            this.device_id = null;
            if (this._data) {
                const entry = Object.entries(this._data.devices).find(([key, val]) => val.product_name === this.device_name || key === this.device_name);
                if (entry) {
                    this.device_id = entry[0];
                }
            }
            if (!changedProperties.has("device_data") || !this.device_data)
                this._resetDeviceData();
        }
        else if ((this.device_id && !this.device_name) || changedProperties.has('device_id')) {
            this.device_name = this.device_id ? this._data?.devices[this.device_id]?.product_name ?? null : null;
            if (!changedProperties.has("device_data") || !this.device_data)
                this._resetDeviceData();
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        this.dispatchEvent(new Event('my-device-updated', { bubbles: true, composed: true }));
    }
    _resetDeviceData() {
        const device_data = this.device_data_original;
        if (device_data) {
            this.device_data = structuredClone(device_data);
            if (this.device_data_partial) {
                _.merge(this.device_data, this.device_data_partial);
                this.device_data_partial = null;
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