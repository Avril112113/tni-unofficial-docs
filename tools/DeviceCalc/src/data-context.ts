import { ContextProvider, createContext } from "@lit/context";
import { TniJsonData } from "raw/data-format5-spec.js";

export const dataContext = createContext<TniJsonData|null>("tni-json-data");

export const dataProvider = new ContextProvider(document.body, {
	context: dataContext,
	initialValue: null
});
