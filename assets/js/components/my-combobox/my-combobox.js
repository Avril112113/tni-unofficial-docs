var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import { createRef, ref } from 'lit/directives/ref.js';
// This only exists because WebAwesome put theirs behind a pro subscription :/
// If load times were not a concern, I'd be using C# with Blazor and MudBlazor.
let MyCombobox = class MyCombobox extends LitElement {
    constructor() {
        super(...arguments);
        this.dropdownRef = createRef();
        this.inputRef = createRef();
        this.value = null;
        this.size = 'm';
    }
    get dropdown() { return this.dropdownRef.value; }
    get input() { return this.inputRef.value; }
    static { this.styles = css `
		:host {
			max-width: 100%;
			min-width: 0;
		}

		::slotted(wa-dropdown-item[active]) {
			background-color: var(--wa-color-surface-default);
			box-shadow: 0 0 0 3px var(--wa-color-focus);
		}
	`; }
    render() {
        // TODO: Replace static placement with, disabled auto reposition.
        return html `
			<wa-dropdown ${ref(this.dropdownRef)}
				slot="header" class="my-combobox" placement="bottom-start" skidding="32"
				size=${this.size}
				@wa-select=${this._onDropdownSelect}
				@wa-show=${() => this._filterItems(true)}
				@wa-after-show=${this._scrollToCurrent}
				@focus=${{ handleEvent: (e) => this._onDropdownFocus(e), capture: true }}
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
    _scrollToCurrent() {
        this._offsetSelectedItem(0, true)?.scrollIntoView({
            block: "center",
            inline: "center",
            behavior: "instant"
        });
    }
    _onSlotchange() {
        this.requestUpdate();
    }
    _onInputClear(e) {
        if (this.dropdown.open) {
            e.stopPropagation();
        }
    }
    _onInputKeydown(e) {
        const focusingKeys = ['ArrowDown', 'ArrowUp', 'Escape', 'Enter'];
        if (!this.dropdown.open || !focusingKeys.includes(e.key)) {
            e.stopPropagation();
            return;
        }
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            this._offsetSelectedItem(1);
            this.dropdown.open = true;
        }
        else if (e.key === 'ArrowUp') {
            e.preventDefault();
            this._offsetSelectedItem(-1);
            this.dropdown.open = true;
        }
        else if (e.key === 'Enter') {
            e.preventDefault();
            const selectedItem = this._offsetSelectedItem(0);
            if (selectedItem) {
                selectedItem.click();
                this.dispatchEvent(new CustomEvent("my-value-confirm", { bubbles: false, detail: selectedItem.value }));
            }
        }
        else if (e.key === 'Escape') {
            this.dropdown.open = false;
        }
    }
    _onDropdownFocus(e) {
        if (e.target !== this.input) {
            e.stopPropagation();
            e.preventDefault();
            this.input.focus();
        }
    }
    async _filterItems(isInitial = false) {
        const searchTerm = (this.input.value ?? "").toLowerCase();
        const searchTerms = searchTerm.split(" ");
        // Query items that are direct structural children of the dropdown element
        let hasMatches = false;
        let singleMatch;
        if (searchTerm.length > 0) {
            this.dropdown.open = true;
        }
        this.dropdownItems.forEach((item) => {
            const text = (item.textContent || '').toLowerCase();
            if (searchTerms.every(term => text.includes(term)) || text.startsWith(searchTerm)) {
                if (!hasMatches)
                    singleMatch = item;
                else
                    singleMatch = undefined;
                item.style.display = '';
                hasMatches = true;
            }
            else {
                item.style.display = 'none';
            }
        });
        if (!hasMatches && searchTerm.length > 0) {
            this.dropdown.open = false;
        }
        else {
            this._checkInputAndSelect();
            this._scrollToCurrent();
        }
        if (singleMatch) {
            this.dispatchEvent(new CustomEvent('my-single-match', { bubbles: false, detail: singleMatch.value }));
        }
        else if (!isInitial) {
            this.dispatchEvent(new CustomEvent('my-single-match', { bubbles: false, detail: null }));
        }
    }
    _onDropdownSelect(event) {
        const selectedItem = event.detail.item;
        this.input.value = (selectedItem.textContent || '').trim();
        // Reset layout displays for next visibility cycle
        const items = this.dropdown.querySelectorAll('wa-dropdown-item');
        items.forEach(item => item.style.display = '');
        this.dropdown.open = false;
        this.input.dispatchEvent(new Event("input"));
        this.dispatchEvent(new CustomEvent("my-value-confirm", { bubbles: false, detail: selectedItem.value }));
    }
    _selectItem(selectedItem) {
        this.dropdownItems.forEach(item => {
            if (item == selectedItem) {
                item.setAttribute('active', '');
                item.setAttribute("tabindex", '0');
                item.scrollIntoView({
                    block: "center",
                    inline: "center",
                    behavior: "instant"
                });
            }
            else {
                item.removeAttribute('active');
                item.setAttribute("tabindex", '-1');
            }
        });
    }
    _offsetSelectedItem(offset, force_update = false) {
        const items = this.dropdownItems.filter(item => item.style.display != "none");
        if (items.length === 0)
            return null;
        const activeIndex = items.findIndex(item => item.hasAttribute('active'));
        let newIndex = ((activeIndex == -1 ? 0 : activeIndex) + offset) % items.length;
        if (newIndex < 0)
            newIndex = items.length + newIndex;
        if (offset != 0 || force_update) {
            this._selectItem(items[newIndex]);
        }
        return items[newIndex] ?? null;
    }
    _checkInputAndSelect() {
        if (this.input.value)
            this._selectItemWithValue(this.input.value);
    }
    _selectItemWithValue(value, default_0 = false) {
        const items = this.dropdownItems.filter(item => item.style.display != "none");
        if (items.length === 0)
            return null;
        const newIndex = items.findIndex(item => item.value == value || item.textContent == value);
        if (newIndex > -1) {
            this._selectItem(items[newIndex]);
            return items[newIndex] ?? null;
        }
        else {
            if (default_0) {
                this._selectItem(items[0]);
            }
            return null;
        }
    }
};
__decorate([
    property({ type: String })
], MyCombobox.prototype, "value", void 0);
__decorate([
    property({ attribute: true, reflect: true })
], MyCombobox.prototype, "size", void 0);
__decorate([
    queryAssignedElements({ flatten: true, selector: 'wa-dropdown-item' })
], MyCombobox.prototype, "dropdownItems", void 0);
MyCombobox = __decorate([
    customElement('my-combobox')
], MyCombobox);
export { MyCombobox };
//# sourceMappingURL=my-combobox.js.map