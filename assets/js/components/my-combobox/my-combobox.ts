import { LitElement, html, css, nothing, PropertyValues } from 'lit';
import { customElement, property, query, queryAssignedElements } from 'lit/decorators.js';
import { Ref, createRef, ref } from 'lit/directives/ref.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { WaClearEvent, WaSelectEvent } from "@awesome.me/webawesome";
import WaDropdownItem from "@awesome.me/webawesome/dist/components/dropdown-item/dropdown-item.js";
import WaDropdown from "@awesome.me/webawesome/dist/components/dropdown/dropdown.js";
import WaInput from "@awesome.me/webawesome/dist/components/input/input.js";


// This only exists because WebAwesome put theirs behind a pro subscription :/
// If load times were not a concern, I'd be using C# with Blazor and MudBlazor.
@customElement('my-combobox')
export class MyCombobox extends LitElement {
	dropdownRef: Ref<WaDropdown> = createRef();
	get dropdown(): WaDropdown { return this.dropdownRef.value!; }

	inputRef: Ref<WaInput> = createRef();
	get input(): WaInput { return this.inputRef.value!; }

	@property({ type: Boolean })
	use_value_over_label: boolean = false;

	@property({ type: Boolean })
	without_clear: boolean = false;

	@property({ type: Boolean })
	without_chevron: boolean = false;

	@property({ type: Boolean })
	without_filtering: boolean = false;

	@property({ type: String })
	placeholder: string = "Type to search...";

	@property({ type: String, reflect: true })
	value: string = "";

	@property({ type: String, reflect: true })
	input_value: string = "";

	@property({ attribute: true, reflect: true })
	size: 'xs' | 's' | 'm' | 'l' | 'xl' | 'small' | 'medium' | 'large' = 'm';

	@queryAssignedElements({ flatten: true, selector: 'wa-dropdown-item' })
	dropdownItems!: WaDropdownItem[];

	static override styles = css`
		:host {
			max-width: 100%;
			min-width: 0;
		}

		::slotted(wa-dropdown-item[active]) {
			background-color: var(--wa-color-surface-default);
			box-shadow: 0 0 0 3px var(--wa-color-focus);
		}
	`;

	protected override firstUpdated(_changedProperties: PropertyValues): void {
		this.input_value = this._getInputValueForValue(this.value);
		this.input.value = this.input_value;
	}

	protected override willUpdate(changedProperties: PropertyValues): void {
		if (changedProperties.has("value") && !changedProperties.has("input_value")) {
			this.input_value = this._getInputValueForValue(this.value);
			if (this.input)
				this.input.value = this.input_value;
		}
	}

	override render() {
		// TODO: Replace static placement with, disabled auto reposition.
		return html`
			<wa-dropdown ${ref(this.dropdownRef)}
				slot="header" placement="bottom-start"
				size=${this.size}
				@wa-select=${(e: WaSelectEvent) => this._selectDropdownItem(e.detail.item as WaDropdownItem)}
				@wa-show=${this._filterItems}
				@wa-after-show=${this._scrollToCurrent}
				@wa-after-hide=${() => { this.input.value = this._getInputValueForValue(this.value); }}
				@focus=${{ handleEvent: (e: FocusEvent) => this._onDropdownFocus(e), capture: true }}
			>
				<wa-input ${ref(this.inputRef)}
					slot="trigger" placeholder=${this.placeholder} autocomplete="off" with-clear=${!this.without_clear || nothing}
					size=${this.size} .value=${this.input_value}
					@input=${() => { this.input_value = this.input.value ?? ""; this._filterItems(); }}
					@keydown=${this._onInputKeydown}
					@click=${this._onInputClick}
					@wa-clear=${(e: WaClearEvent) => { this._selectItemWithValue(this.value, true); }}
				>
					<slot name="start" slot="start"></slot>
					${this.without_chevron ? nothing : html`<wa-icon name="chevron-down" slot="end"></wa-icon>`}
				</wa-input>
				<slot @slotchange="${this._onSlotchange}"></slot>
			</wa-dropdown>
		`;
	}

	private _scrollToCurrent() {
		this._offsetSelectedItem(0, true)?.scrollIntoView({
			block: "center",
			inline: "center",
			behavior: "instant"
		});
	}

	private _onSlotchange() {
		this.requestUpdate();
	}

	private _onInputClick(e: Event) {
		if (this.dropdown.open) {
			e.stopPropagation();
		}
	}

	private _onInputKeydown(e: KeyboardEvent): void {
		const focusingKeys = ['ArrowDown', 'ArrowUp', 'Escape', 'Enter'];
		
		if (!this.dropdown.open || !focusingKeys.includes(e.key)) {
			e.stopPropagation();
			return
		}

		if (e.key === 'ArrowDown') {
			e.preventDefault();
			this._offsetSelectedItem(1);
			this.dropdown.open = true;
		} else if (e.key === 'ArrowUp') {
			e.preventDefault();
			this._offsetSelectedItem(-1);
			this.dropdown.open = true;
		} else if (e.key === 'Enter') {
			e.preventDefault();
			const selectedItem = this._offsetSelectedItem(0);
			if (selectedItem) {
				selectedItem.click();
			}
		} else if (e.key === 'Escape') {
			this.dropdown.open = false;
		}
	}

	private _onDropdownFocus(e: FocusEvent): void {
		if (e.target !== this.input) {
			e.stopPropagation();
			e.preventDefault();
			this.input.focus();
		}
	}

	private _getDropdownItemLabel(item: WaDropdownItem): string {
		// const itemLabel = item.shadowRoot?.querySelector("[part='label']")?.querySelector("slot") as HTMLSlotElement|null|undefined;
		// return itemLabel
		// 	? itemLabel.assignedNodes().filter(node => !((node as HTMLElement).classList?.contains("my-combobox-ignore"))).map(node => node.textContent).join('').trim()
		// 	: item.textContent;
		const labelText = Array.from(item.childNodes)
			.filter((node) => {
				if (node.nodeType == Node.COMMENT_NODE) return false;
				const el = node as HTMLElement;
				if (el.classList?.contains("my-combobox-ignore")) return false;
				if (el.slot) return false;
				return true;
			})
			.map(node => node.textContent)
			.join('')
			.trim();
		return labelText;
	}
	private _getDropdownInputValue(dropdown_item: WaDropdownItem) {
		return this.use_value_over_label
			? dropdown_item.value
			: this._getDropdownItemLabel(dropdown_item).trim();
	}

	private _getDropdownItemForValue(value: string) {
		return this.dropdownItems.find((item) => {
			return item.value == value;
		});
	}
	private _getInputValueForValue(value: string) {
		const item = this._getDropdownItemForValue(value);
		if (!item) return "";
		return this._getDropdownInputValue(item);
	}

	private async _filterItems() {
		if (this.without_filtering) {
			this.dropdown.open = true;
			return;
		}

		const searchTerm = (this.input.value ?? "").toLowerCase();
		const searchTerms = searchTerm.split(" ");
		
		// Query items that are direct structural children of the dropdown element
		let hasMatches = false;

		if (searchTerm.length > 0) {
			this.dropdown.open = true;
		}

		this.dropdownItems.forEach((item) => {
			const text = this._getDropdownItemLabel(item).toLowerCase() ?? "";
			if (searchTerms.every(term => text.includes(term)) || text.startsWith(searchTerm)) {
				item.style.display = '';
				hasMatches = true;
			} else {
				item.style.display = 'none';
			}
		});

		if (hasMatches || searchTerm.length > 0) {
			this._checkInputAndSelect();
			this._scrollToCurrent();
		}
	}

	private _selectDropdownItem(selected_item: WaDropdownItem) {
		this.value = selected_item.value;
		this.input_value = this.use_value_over_label
			? selected_item.value
			: this._getDropdownItemLabel(selected_item).trim();
		
		const items = this.dropdown.querySelectorAll<HTMLElement>('wa-dropdown-item');
		items.forEach(item => item.style.display = '');
		
		this.dropdown.open = false;

		this.input.dispatchEvent(new Event("input"));
		this.dispatchEvent(new CustomEvent("my-value-confirm", { bubbles: false, detail: this }));
	}

	private _selectItemUpdate(selectedItem: WaDropdownItem|null|undefined) {
		this.dropdownItems.forEach(item => {
			if (item == selectedItem) {
				item.setAttribute('active', ''); 
				item.setAttribute("tabindex", '0');
				item.scrollIntoView({
					block: "center",
					inline: "center",
					behavior: "instant"
				});
			} else {
				item.removeAttribute('active');
				item.setAttribute("tabindex", '-1');
			}
		});
	}

	private _offsetSelectedItem(offset: number, force_update = false): WaDropdownItem|null {
		const items = this.dropdownItems.filter(item => item.style.display != "none");
		if (items.length === 0) return null;

		const activeIndex = items.findIndex(item => item.hasAttribute('active'));
		let newIndex = ((activeIndex == -1 ? 0 : activeIndex) + offset) % items.length;
		if (newIndex < 0)
			newIndex = items.length + newIndex;

		if (offset != 0 || force_update) {
			this._selectItemUpdate(items[newIndex]);
		}
		return items[newIndex] ?? null;
	}

	private _checkInputAndSelect() {
		if (this.input_value)
			this._selectItemWithValue(this.input_value);
	}

	private _selectItemWithValue(value: string, default_0 = false): WaDropdownItem|null {
		const items = this.dropdownItems.filter(item => item.style.display != "none");
		if (items.length === 0) return null;

		const newIndex = items.findIndex(item => item.value == value || item.textContent == value);

		if (newIndex > -1) {
			this._selectItemUpdate(items[newIndex]);
			return items[newIndex] ?? null;
		} else {
			if (default_0) {
				this._selectItemUpdate(items[0]);
			}
			return null;
		}
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"my-combobox": MyCombobox;
	}
}
