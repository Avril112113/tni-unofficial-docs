import { LitElement, html, css } from 'lit';
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

	@property({ type: String })
	value: string|null = null;

	@property({ attribute: true, reflect: true })
	size: 'xs' | 's' | 'm' | 'l' | 'xl' | 'small' | 'medium' | 'large' = 'm';

	@queryAssignedElements({ flatten: true, selector: 'wa-dropdown-item' })
	dropdownItems!: WaDropdownItem[];

	static override styles = css`
		::slotted(wa-dropdown-item[active]) {
			background-color: var(--wa-color-surface-default);
			box-shadow: 0 0 0 3px var(--wa-color-focus);
		}
	`;

	override render() {
		// TODO: Replace static placement with, disabled auto reposition.
		return html`
			<wa-dropdown ${ref(this.dropdownRef)}
				slot="header" class="my-combobox" placement="bottom-start" skidding="32"
				size=${this.size}
				@wa-select=${this._onDropdownSelect}
				@wa-show=${() => this._filterItems(true)}
				@wa-after-show=${this._scrollToCurrent}
				@focus=${{ handleEvent: (e: FocusEvent) => this._onDropdownFocus(e), capture: true }}
			>
				<wa-input ${ref(this.inputRef)}
					slot="trigger" placeholder="Type to search..." autocomplete="off" with-clear
					size=${this.size} value=${this.value ?? ""}
					@input=${() => this._filterItems()}
					@keydown=${this._onInputKeydown}
					@click=${this._onInputClear}
				>
					<slot name="start" slot="start"></slot>
					<wa-icon name="chevron-down" slot="end"></wa-icon>
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

	private _onInputClear(e: Event) {
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
				this.dispatchEvent(new CustomEvent("my-value-confirm", { bubbles: false, detail: selectedItem.value }));
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

	private async _filterItems(isInitial = false) {
		const searchTerm = (this.input.value ?? "").toLowerCase();
		const searchTerms = searchTerm.split(" ");
		
		// Query items that are direct structural children of the dropdown element
		let hasMatches = false;
		let singleMatch: WaDropdownItem|undefined;

		if (searchTerm.length > 0) {
			this.dropdown.open = true;
		}

		this.dropdownItems.forEach((item) => {
			const text = (item.textContent || '').toLowerCase();
			if (searchTerms.every(term => text.includes(term)) || text.startsWith(searchTerm)) {
				if (!hasMatches)
					singleMatch = item as WaDropdownItem;
				else
					singleMatch = undefined;
				item.style.display = '';
				hasMatches = true;
			} else {
				item.style.display = 'none';
			}
		});

		if (!hasMatches && searchTerm.length > 0) {
			this.dropdown.open = false;
		} else {
			this._checkInputAndSelect();
			this._scrollToCurrent();
		}
		
		if (singleMatch) {
			this.dispatchEvent(new CustomEvent<string|null>('my-single-match', { bubbles: false, detail: singleMatch.value }));
		} else if (!isInitial) {
			this.dispatchEvent(new CustomEvent<string|null>('my-single-match', { bubbles: false, detail: null }));
		}
	}

	private _onDropdownSelect(event: WaSelectEvent): void {
		const selectedItem = event.detail.item as WaDropdownItem;
		this.input.value = (selectedItem.textContent || '').trim();
		
		// Reset layout displays for next visibility cycle
		const items = this.dropdown.querySelectorAll<HTMLElement>('wa-dropdown-item');
		items.forEach(item => item.style.display = '');
		
		this.dropdown.open = false;

		this.input.dispatchEvent(new Event("input"));
		this.dispatchEvent(new CustomEvent("my-value-confirm", { bubbles: false, detail: selectedItem.value }));
	}

	private _selectItem(selectedItem: WaDropdownItem|null|undefined) {
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
			this._selectItem(items[newIndex]);
		}
		return items[newIndex] ?? null;
	}

	private _checkInputAndSelect() {
		if (this.input.value)
			this._selectItemWithValue(this.input.value);
	}

	private _selectItemWithValue(value: string, default_0 = false): WaDropdownItem|null {
		const items = this.dropdownItems.filter(item => item.style.display != "none");
		if (items.length === 0) return null;

		const newIndex = items.findIndex(item => item.value == value || item.textContent == value);

		if (newIndex > -1) {
			this._selectItem(items[newIndex]);
			return items[newIndex] ?? null;
		} else {
			if (default_0) {
				this._selectItem(items[0]);
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
