const domReady = new Promise((resolve) => {
    if (document.readyState !== "loading") {
        resolve();
    }
    else {
        document.addEventListener("DOMContentLoaded", () => resolve());
    }
});
Promise.all([
    domReady,
    fetch(window.SiteConfig.dataUrl)
        .then(async (response) => {
        if (!response.ok)
            throw response;
        return await response.json();
    }),
])
    .then(([_, data]) => {
    console.log("Data loaded:", data);
    document.getElementById("loading_data").style.display = "none";
    for (let elem of document.getElementsByClassName("show_data_loaded")) {
        if (elem instanceof HTMLElement) {
            elem.style.display = "initial";
        }
    }
    for (let elem of document.getElementsByClassName("populate_options_data_devices")) {
        for (let device_id in data.devices) {
            let device = data.devices[device_id];
            var option_elem = document.createElement("wa-option");
            option_elem.setAttribute("value", device_id);
            option_elem.textContent = device.product_name;
            elem.appendChild(option_elem);
        }
    }
    for (let elem of document.getElementsByClassName("populate_dropdown_data_devices")) {
        for (let device_id in data.devices) {
            let device = data.devices[device_id];
            var dropdown_item_elem = document.createElement("wa-dropdown-item");
            dropdown_item_elem.setAttribute("value", device_id);
            dropdown_item_elem.textContent = device.product_name;
            elem.appendChild(dropdown_item_elem);
        }
    }
    document.getElementById("device-select").addEventListener("my-select", (e) => {
        document.getElementById("dbg_selected_device").textContent = e.detail;
    });
})
    .catch((error) => {
    console.error(error);
    document.getElementById("loading_data_status").textContent = error;
    document.getElementById("loading_data_spinner").style.display = "none";
});
export {};
//# sourceMappingURL=index.js.map