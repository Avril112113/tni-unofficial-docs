import { ContextProvider, createContext } from "@lit/context";
import { TniJsonData } from "raw/data-format4-spec";

export const dataContext = createContext<TniJsonData|null>("tni-json-data");

export const dataProvider = new ContextProvider(document.body, {
	context: dataContext,
	initialValue: null
});
