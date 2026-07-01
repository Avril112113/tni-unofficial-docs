import { LitElement, PropertyValues, TemplateResult, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { cache } from 'lit/directives/cache.js';
import { createRef, ref, Ref } from 'lit/directives/ref.js';
import { live } from 'lit/directives/live.js';
import { consume } from '@lit/context';

import _ from "lodash";

import { TniJsonData, TniJsonDevice, TniJsonDeviceId } from 'raw/data-format2-spec';

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

	private __dropdown_item_templates: TemplateResult<1>[] = [];
	private __dropdown_item_templates_data?: any;
	get _dropdown_item_templates(): TemplateResult<1>[] {
		if (this.__dropdown_item_templates_data !== this._data) {
			this.__dropdown_item_templates_data = this._data;
			this.__dropdown_item_templates = [];
			if (this._data) {
				for (const device_id in this._data.devices) {
					const device = this._data.devices[device_id]!;
					this.__dropdown_item_templates.push(html`<wa-dropdown-item value=${device_id}>${device.product_name}</wa-dropdown-item>`)
				}
			}
		}
		return this.__dropdown_item_templates;
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
					parts.push(html`
						<div class="my-flex">
							<wa-number-input
								label="CPU" min="0" max="9999" step="1" .value=${live(String(logic_controller.installed_cpu))}
								appearance="filled" size="l" style="max-width: 100px; --wa-content-spacing: 0;"
								class=${logic_controller.installed_cpu == logic_controller_original.installed_cpu ? "" : "input-changed"}
								@input=${(e: InputEvent) => {
									logic_controller.installed_cpu = Number.parseInt((e.target as WaNumberInput).value ?? "0");
									this.requestUpdate();
								}}
							></wa-number-input>
							<wa-number-input
								label="Memory" min="0" max="9999" step="1" .value=${live(String(logic_controller.installed_mem))}
								appearance="filled" size="l" style="max-width: 100px; --wa-content-spacing: 0;"
								class=${logic_controller.installed_mem == logic_controller_original.installed_mem ? "" : "input-changed"}
								@input=${(e: InputEvent) => {
									logic_controller.installed_mem = Number.parseInt((e.target as WaNumberInput).value ?? "0");
									this.requestUpdate();
								}}
							></wa-number-input>
							<wa-number-input
								label="Storage" min="0" max="9999" step="1" .value=${live(String(logic_controller.installed_sto))}
								appearance="filled" size="l" style="max-width: 100px; --wa-content-spacing: 0;"
								class=${logic_controller.installed_sto == logic_controller_original.installed_sto ? "" : "input-changed"}
								@input=${(e: InputEvent) => {
									logic_controller.installed_sto = Number.parseInt((e.target as WaNumberInput).value ?? "0");
									this.requestUpdate();
								}}
							></wa-number-input>
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
				<my-combobox ${ref(this.comboboxRef)} slot="header" style="flex-grow: 1;" value=${this.device_name ?? ""}
					@my-single-match=${(e: CustomEvent<string|null>) => {this.device_id = e.detail}}
					@my-value-confirm=${(e: CustomEvent<string>) => {this.device_id = e.detail}}
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

	override willUpdate(changedProperties: Map<PropertyKey, unknown>) {
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
		} else if ((this.device_id && !this.device_name) || changedProperties.has('device_id')) {
			this.device_name = this.device_id ? this._data?.devices[this.device_id]?.product_name ?? null : null;
			if (!changedProperties.has("device_data") || !this.device_data)
				this._resetDeviceData();
		}
	}

	override updated(changedProperties: PropertyValues): void {
		super.updated(changedProperties);

		this.dispatchEvent(new Event('my-device-updated', {bubbles: true, composed: true}));
	}

	private _resetDeviceData() {
		const device_data = this.device_data_original;
		if (device_data) {
			this.device_data = structuredClone(device_data);
			if (this.device_data_partial) {
				_.merge(this.device_data, this.device_data_partial);
				this.device_data_partial = null;
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
