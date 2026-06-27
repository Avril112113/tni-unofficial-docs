function selectItem(items, selectedItem) {
    items.forEach(item => {
        if (item == selectedItem) {
            item.setAttribute('active', '');
            item.setAttribute("tabindex", '0');
            requestAnimationFrame(() => {
                const dropdown = item.closest("wa-dropdown");
                ;
                const menu = dropdown?.shadowRoot?.querySelector("#menu") || dropdown?.shadowRoot?.querySelector("[part~='panel']");
                if (!menu)
                    return;
                const menuRect = menu.getBoundingClientRect();
                const itemRect = item.getBoundingClientRect();
                if (itemRect.top < menuRect.top) {
                    menu.scrollTop -= (menuRect.top - itemRect.top);
                }
                else if (itemRect.bottom > menuRect.bottom) {
                    menu.scrollTop += (itemRect.bottom - menuRect.bottom);
                }
            });
        }
        else {
            item.removeAttribute('active');
            item.setAttribute("tabindex", '-1');
        }
    });
}
function offsetSelectedItem(dropdown, offset, force_update = false) {
    const allItems = Array.from(dropdown.querySelectorAll('wa-dropdown-item'));
    const items = allItems.filter(item => item.style.display != "none");
    if (items.length === 0)
        return null;
    const activeIndex = items.findIndex(item => item.hasAttribute('active') || item === document.activeElement);
    let newIndex = ((activeIndex == -1 ? 0 : activeIndex) + offset) % items.length;
    if (newIndex < 0)
        newIndex = items.length + newIndex;
    if (offset != 0 || force_update) {
        selectItem(allItems, items[newIndex]);
    }
    return items[newIndex] ?? null;
}
function selectItemWithValue(dropdown, value, default_0 = true) {
    const allItems = Array.from(dropdown.querySelectorAll('wa-dropdown-item'));
    const items = allItems.filter(item => item.style.display != "none");
    if (items.length === 0)
        return null;
    const newIndex = items.findIndex(item => item.value == value);
    if (newIndex > -1) {
        selectItem(allItems, items[newIndex]);
        return items[newIndex] ?? null;
    }
    else {
        if (default_0) {
            selectItem(allItems, items[0]);
        }
        return null;
    }
}
export class ComboboxController {
    dropdown;
    input;
    constructor(dropdownElement) {
        this.dropdown = dropdownElement;
        // Look for the input trigger nested directly inside this component instance
        const foundInput = this.dropdown.querySelector('wa-input');
        if (!foundInput)
            throw new Error('ComboboxController: Missing slot="trigger" input.');
        this.input = foundInput;
        this.initEvents();
    }
    initEvents() {
        this.input.addEventListener('input', () => {
            this.filterItems();
        });
        this.dropdown.addEventListener('wa-select', (e) => {
            this.handleSelect(e);
        });
        this.dropdown.addEventListener('wa-show', () => {
            offsetSelectedItem(this.dropdown, 0)?.scrollIntoView({
                block: "center",
                inline: "center",
                behavior: "instant"
            });
        });
        this.dropdown.addEventListener('focus', (e) => {
            if (e.target !== this.input) {
                e.stopPropagation();
                e.preventDefault();
                this.input.focus();
            }
        }, true);
        this.input.addEventListener('keydown', (e) => {
            const focusingKeys = ['ArrowDown', 'ArrowUp', 'Escape', 'Enter'];
            if (!this.dropdown.open || !focusingKeys.includes(e.key)) {
                e.stopPropagation();
                return;
            }
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                offsetSelectedItem(this.dropdown, 1);
                this.dropdown.open = true;
            }
            else if (e.key === 'ArrowUp') {
                e.preventDefault();
                offsetSelectedItem(this.dropdown, -1);
                this.dropdown.open = true;
            }
            else if (e.key === 'Enter') {
                e.preventDefault();
                const selectedItem = offsetSelectedItem(this.dropdown, 0);
                if (selectedItem) {
                    selectedItem.click();
                    this.dropdown.dispatchEvent(new CustomEvent("my-value-confirm", { bubbles: false, detail: selectedItem.value }));
                }
            }
            else if (e.key === 'Escape') {
                this.dropdown.open = false;
            }
        });
    }
    filterItems() {
        const searchTerm = (this.input.value ?? "").toLowerCase();
        const searchTerms = searchTerm.split(" ");
        // Query items that are direct structural children of the dropdown element
        const items = this.dropdown.querySelectorAll(':scope > wa-dropdown-item');
        let hasMatches = false;
        let singleMatch;
        if (searchTerm.length > 0) {
            this.dropdown.open = true;
        }
        items.forEach((item) => {
            const text = (item.textContent || '').toLowerCase();
            if (searchTerms.every(term => text.includes(term))) {
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
        if (this.input.value)
            selectItemWithValue(this.dropdown, this.input.value);
        if (!hasMatches && searchTerm.length > 0) {
            this.dropdown.open = false;
        }
        if (singleMatch) {
            this.dropdown.dispatchEvent(new CustomEvent('my-single-match', { bubbles: false, detail: singleMatch.value }));
        }
        else {
            this.dropdown.dispatchEvent(new CustomEvent('my-single-match', { bubbles: false, detail: null }));
        }
    }
    handleSelect(event) {
        const selectedItem = event.detail.item;
        this.input.value = (selectedItem.textContent || '').trim();
        // Reset layout displays for next visibility cycle
        const items = this.dropdown.querySelectorAll('wa-dropdown-item');
        items.forEach(item => item.style.display = '');
        this.dropdown.open = false;
        this.input.dispatchEvent(new Event("input"));
        this.dropdown.dispatchEvent(new CustomEvent("my-value-confirm", { bubbles: false, detail: selectedItem.value }));
    }
}
function initComboboxes() {
    const elements = document.querySelectorAll('wa-dropdown.my-combobox');
    elements.forEach((el) => {
        try {
            new ComboboxController(el);
        }
        catch (error) {
            console.error(error);
        }
    });
}
// Run setup after the DOM finishes loading
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initComboboxes);
}
else {
    initComboboxes();
}
//# sourceMappingURL=my-combobox.js.map