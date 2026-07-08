import type WaNumberInput from "@awesome.me/webawesome/dist/components/number-input/number-input.js";
import { ContextProvider, createContext } from "@lit/context";


export class EditorConfig {
	private static __current_day = -1;
	public static get current_day(): number {
		return EditorConfig.__current_day;
	}
	public static set current_day(value) {
		EditorConfig.__current_day = Math.max(value, -1);
		const input = document.getElementById("config_current_day") as WaNumberInput|null;
		if (input) {
			input.value = value < 0 ? "" : String(value);
		}
		window.localStorage.setItem("config_current_day", String(EditorConfig.current_day));
		editorConfigProvider.updateObservers();
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
