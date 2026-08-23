import type WaNumberInput from "@awesome.me/webawesome/dist/components/number-input/number-input.js";
import { getTotalSanStorageDelta } from "./device-editor";
import { ContextProvider, createContext } from "@lit/context";


export class EditorConfig {
	private static __current_day = -1;
	public static get current_day(): number {
		return EditorConfig.__current_day;
	}
	public static set current_day(value) {
		const oldValue = EditorConfig.__current_day;
		EditorConfig.__current_day = Math.max(value, -1);

		const input = document.getElementById("config_current_day") as WaNumberInput|null;
		if (input) {
			input.value = value < 0 ? "" : String(value);
		}

		window.localStorage.setItem("config_current_day", String(EditorConfig.current_day));
		if (oldValue !== EditorConfig.__current_day)
			editorConfigProvider.updateObservers();
	}

	public static __old_total = 0;
	private static __delta_san = -1;
	public static get delta_san(): number {
		return EditorConfig.__delta_san;
	}
	public static set delta_san(value) {
		const oldValue = EditorConfig.__delta_san;
		EditorConfig.__delta_san = Math.max(value, 0);

		const newTotal = getTotalSanStorageDelta();

		const input = document.getElementById("config_excess_san") as WaNumberInput|null;
		if (input) {
			input.value = String(newTotal);
			if (EditorConfig.__delta_san !== 0) {
				if (!input.classList.contains("input-changed"))
					input.classList.add("input-changed");
			} else {
				if (input.classList.contains("input-changed"))
					input.classList.remove("input-changed");
			}
			input.classList;
		}

		window.localStorage.setItem("config_excess_san", String(EditorConfig.delta_san));
		if (oldValue !== EditorConfig.__delta_san || EditorConfig.__old_total !== newTotal)
			editorConfigProvider.updateObservers();
		EditorConfig.__old_total = newTotal;
	}

	static loadFromLocalStorage() {
		const current_day = window.localStorage.getItem("config_current_day");
		if (current_day) {
			EditorConfig.current_day = parseInt(current_day);
		}
	}
}

export const editorConfigContext = createContext<typeof EditorConfig>("EditorConfig");

export const editorConfigProvider = new ContextProvider(document.body, {
	context: editorConfigContext,
	initialValue: EditorConfig
});

window.EditorConfig = EditorConfig;

declare global {
	interface Window {
		EditorConfig: EditorConfig,
	}
}
