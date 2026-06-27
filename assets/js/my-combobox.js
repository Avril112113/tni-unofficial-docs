function highlightMenuItem(items, index) {
    items.forEach((item, i) => {
        if (i === index) {
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
        this.dropdown.addEventListener('focus', (e) => {
            if (e.target !== this.input) {
                e.stopPropagation();
                e.preventDefault();
                this.input.focus();
            }
        }, true);
        this.input.addEventListener('keydown', (e) => {
            const focusingKeys = ['ArrowDown', 'ArrowUp', 'Escape', 'Enter'];
            if (!focusingKeys.includes(e.key)) {
                e.stopPropagation();
                return;
            }
            const items = Array.from(this.dropdown.querySelectorAll('wa-dropdown-item, wa-menu-item'));
            if (items.length === 0)
                return;
            const activeIndex = items.findIndex(item => item.hasAttribute('active') || item === document.activeElement);
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                // Move to the next item, or wrap around to the first item
                const nextIndex = (activeIndex + 1) % items.length;
                highlightMenuItem(items, nextIndex);
                this.dropdown.open = true;
            }
            else if (e.key === 'ArrowUp') {
                e.preventDefault();
                // Move to the previous item, or wrap around to the last item
                const prevIndex = (activeIndex - 1 + items.length) % items.length;
                highlightMenuItem(items, prevIndex);
                this.dropdown.open = true;
            }
            else if (e.key === 'Enter') {
                e.preventDefault();
                // If an item is active, simulate a click to select it
                if (activeIndex !== -1) {
                    items[activeIndex].click();
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
        if (!hasMatches && searchTerm.length > 0) {
            this.dropdown.open = false;
        }
        if (singleMatch) {
            this.dropdown.dispatchEvent(new CustomEvent('my-select', { bubbles: false, detail: singleMatch?.getAttribute("value") ?? null }));
        }
        else {
            this.dropdown.dispatchEvent(new CustomEvent('my-select', { bubbles: false, detail: null }));
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