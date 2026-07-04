import LZString from 'lz-string';

import { TniJsonData } from "raw/data-format4-spec";
import { dataProvider } from "./data-context.js";


function serializeState() {
	const devices_list = document.getElementById("devices_list")! as HTMLElement;

	const devices_data: any[] = [];
	devices_list.querySelectorAll("my-device").forEach((device) => {
		devices_data.push(device.serialize());
	});

	const state = {
		"devices": devices_data,
	};
	console.debug("serializeState()", state);
	return state;
};
function deserializeState(data: ReturnType<typeof serializeState>) {
	console.debug("deserializeState", data);

	const devices_list = document.getElementById("devices_list")! as HTMLElement;
	devices_list.innerHTML = "";
	
	data.devices?.forEach((device_data) => {
		const device = document.createElement("my-device");
		devices_list.appendChild(device);
		device.deserialize(device_data);
	});
};


const domReady = new Promise<void>((resolve) => {
    if (document.readyState !== "loading") {
        resolve();
    } else {
        document.addEventListener("DOMContentLoaded", () => resolve());
    }
});

Promise.all([
	domReady,
	fetch(window.SiteConfig!.dataLatestUrl)
		.then(async (response) => {
			if (!response.ok) throw response;
			return await response.json() as TniJsonData;
		}),
])
	.then(([_, data]) => {
		console.log("Data loaded:", data);
		document.getElementById("loading_data")!.style.display = "none";
		for (let elem of document.getElementsByClassName("show_data_loaded")) {
			if (elem instanceof HTMLElement) {
				elem.style.display = "initial";
			}
		}

		dataProvider.setValue(data);

		const devices_list = document.getElementById("devices_list")! as HTMLElement;

		// State loading...
		{
			const url = new URL(window.location.href);
			if (url.searchParams.has("state")) {
				console.log("Loading from url state...");
				deserializeState(JSON.parse(LZString.decompressFromEncodedURIComponent(url.searchParams.get("state")!)));
				url.searchParams.delete("state");
				window.history.replaceState(null, "", url);
			} else {
				const storage_state = window.localStorage.getItem("tool_DeviceCalc_state");
				if (storage_state) {
					console.log("Loading from localStorage state...");
					deserializeState(JSON.parse(storage_state));
				} else {
					console.log("Loading default state... (no state found)");
					const elem = document.createElement("my-device");
					devices_list.appendChild(elem);
					elem.device_id = "MacroHard Boulder SRV";
				}
			}
		}

		// State saving...
		// Give the DOM time to load everything that may have just been loaded...
		requestAnimationFrame(() => {
			const saveState = () => {
				console.debug("Saving state to localStorage...");
				window.localStorage.setItem("tool_DeviceCalc_state", JSON.stringify(serializeState()));
			};
			devices_list.addEventListener("my-device-updated", saveState);
			new MutationObserver(saveState).observe(devices_list, { childList: true });
		});

		document.getElementById("copy-link-btn")!.addEventListener("click", () => {
			const url = new URL(window.location.href);
			url.searchParams.set("state", LZString.compressToEncodedURIComponent(JSON.stringify(serializeState())));
			navigator.clipboard.writeText(url.toString());
		});
	})
	.catch((error) => {
		console.error("Failed to retrieve data", error);
		document.getElementById("loading_data_status")!.textContent = "Failed to retrieve data, check console for details.";
		document.getElementById("loading_data_spinner")!.style.display = "none";
	});
