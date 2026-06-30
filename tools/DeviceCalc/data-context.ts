import { ContextProvider, createContext } from "@lit/context";
import { TniJsonData } from "data-latest-spec";

export const dataContext = createContext<TniJsonData|null>("tni-json-data");

export const dataProvider = new ContextProvider(document.body, {
	context: dataContext,
	initialValue: null
});
