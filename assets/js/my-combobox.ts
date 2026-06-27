import { WaSelectEvent } from "@awesome.me/webawesome";
import WaDropdownItem from "@awesome.me/webawesome/dist/components/dropdown-item/dropdown-item.js";
import WaDropdown from "@awesome.me/webawesome/dist/components/dropdown/dropdown.js";
import WaInput from "@awesome.me/webawesome/dist/components/input/input.js";

declare global {
	interface HTMLElementEventMap {
		"my-single-match": CustomEvent<string>;
		"my-value-confirm": CustomEvent<string>;
	}
}

function selectItem(items: HTMLElement[], selectedItem: WaDropdownItem|null|undefined) {
    items.forEach(item => {
        if (item == selectedItem) {
            item.setAttribute('active', ''); 
			item.setAttribute("tabindex", '0');
			
			requestAnimationFrame(() => {
				const dropdown = item.closest("wa-dropdown");;
				const menu = dropdown?.shadowRoot?.querySelector("#menu") || dropdown?.shadowRoot?.querySelector("[part~='panel']");
				if (!menu) return;

				const menuRect = menu.getBoundingClientRect();
				const itemRect = item.getBoundingClientRect();

				if (itemRect.top < menuRect.top) {
					menu.scrollTop -= (menuRect.top - itemRect.top);
				} else if (itemRect.bottom > menuRect.bottom) {
					menu.scrollTop += (itemRect.bottom - menuRect.bottom);
				}
			});
        } else {
            item.removeAttribute('active');
			item.setAttribute("tabindex", '-1');
        }
    });
}

function offsetSelectedItem(dropdown: WaDropdown, offset: number, force_update = false): WaDropdownItem|null {
	const allItems = Array.from(dropdown.querySelectorAll('wa-dropdown-item')) as WaDropdownItem[];
	const items = allItems.filter(item => item.style.display != "none");
	if (items.length === 0) return null;

	const activeIndex = items.findIndex(item => item.hasAttribute('active') || item === document.activeElement);
	let newIndex = ((activeIndex == -1 ? 0 : activeIndex) + offset) % items.length;
	if (newIndex < 0)
		newIndex = items.length + newIndex;

	if (offset != 0 || force_update) {
		selectItem(allItems, items[newIndex]);
	}
	return items[newIndex] ?? null;
}

function selectItemWithValue(dropdown: WaDropdown, value: string, default_0 = true): WaDropdownItem|null {
	const allItems = Array.from(dropdown.querySelectorAll('wa-dropdown-item')) as WaDropdownItem[];
	const items = allItems.filter(item => item.style.display != "none");
	if (items.length === 0) return null;

	const newIndex = items.findIndex(item => item.value == value);

	if (newIndex > -1) {
		selectItem(allItems, items[newIndex]);
		return items[newIndex] ?? null;
	} else {
		if (default_0) {
			selectItem(allItems, items[0]);
		}
		return null;
	}
}

export class ComboboxController {
	private dropdown: WaDropdown;
	private input: WaInput;

	constructor(dropdownElement: WaDropdown) {
		this.dropdown = dropdownElement;
		
		// Look for the input trigger nested directly inside this component instance
		const foundInput = this.dropdown.querySelector('wa-input');
		if (!foundInput) throw new Error('ComboboxController: Missing slot="trigger" input.');
		
		this.input = foundInput;

		this.initEvents();
	}

	private initEvents(): void {
		this.input.addEventListener('input', () => {
			this.filterItems();
		});
		this.dropdown.addEventListener('wa-select', (e: WaSelectEvent) => {
			this.handleSelect(e);
		});

		this.dropdown.addEventListener('wa-show', () => {
			offsetSelectedItem(this.dropdown, 0)?.scrollIntoView({
				block: "center",
				inline: "center",
				behavior: "instant"
			});
		})

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
				return
			}

			if (e.key === 'ArrowDown') {
				e.preventDefault();
				offsetSelectedItem(this.dropdown, 1);
				this.dropdown.open = true;
			} else if (e.key === 'ArrowUp') {
				e.preventDefault();
				offsetSelectedItem(this.dropdown, -1);
				this.dropdown.open = true;
			} else if (e.key === 'Enter') {
				e.preventDefault();
				const selectedItem = offsetSelectedItem(this.dropdown, 0);
				if (selectedItem) {
					selectedItem.click();
					this.dropdown.dispatchEvent(new CustomEvent("my-value-confirm", { bubbles: false, detail: selectedItem.value }));
				}
			} else if (e.key === 'Escape') {
				this.dropdown.open = false;
			}
		});
	}

	private filterItems(): void {
		const searchTerm = (this.input.value ?? "").toLowerCase();
		const searchTerms = searchTerm.split(" ");
		
		// Query items that are direct structural children of the dropdown element
		const items = this.dropdown.querySelectorAll<HTMLElement>(':scope > wa-dropdown-item');
		let hasMatches = false;
		let singleMatch: WaDropdownItem|undefined;

		if (searchTerm.length > 0) {
			this.dropdown.open = true;
		}

		items.forEach((item) => {
			const text = (item.textContent || '').toLowerCase();
			if (searchTerms.every(term => text.includes(term))) {
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

		if (this.input.value)
			selectItemWithValue(this.dropdown, this.input.value);

		if (!hasMatches && searchTerm.length > 0) {
			this.dropdown.open = false;
		}
		
		if (singleMatch) {
			this.dropdown.dispatchEvent(new CustomEvent<string|null>('my-single-match', { bubbles: false, detail: singleMatch.value }));
		} else {
			this.dropdown.dispatchEvent(new CustomEvent<string|null>('my-single-match', { bubbles: false, detail: null }));
		}
	}

	private handleSelect(event: WaSelectEvent): void {
		const selectedItem = event.detail.item as WaDropdownItem;
		this.input.value = (selectedItem.textContent || '').trim();
		
		// Reset layout displays for next visibility cycle
		const items = this.dropdown.querySelectorAll<HTMLElement>('wa-dropdown-item');
		items.forEach(item => item.style.display = '');
		
		this.dropdown.open = false;

		this.input.dispatchEvent(new Event("input"));
		this.dropdown.dispatchEvent(new CustomEvent("my-value-confirm", { bubbles: false, detail: selectedItem.value }));
	}
}

function initComboboxes(): void {
	const elements = document.querySelectorAll<WaDropdown>('wa-dropdown.my-combobox');
	elements.forEach((el) => {
		try {
			new ComboboxController(el);
		} catch (error) {
			console.error(error);
		}
	});
}

// Run setup after the DOM finishes loading
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initComboboxes);
} else {
	initComboboxes();
}
