import { ContextProvider, createContext } from "@lit/context";
import { DataCached } from "./data-cached";

export const dataContext = createContext<DataCached|null>("tni-json-data");

export const dataProvider = new ContextProvider(document.body, {
	context: dataContext,
	initialValue: null
});
