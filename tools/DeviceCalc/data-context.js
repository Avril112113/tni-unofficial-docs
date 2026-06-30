import { ContextProvider, createContext } from "@lit/context";
export const dataContext = createContext("tni-json-data");
export const dataProvider = new ContextProvider(document.body, {
    context: dataContext,
    initialValue: null
});
//# sourceMappingURL=data-context.js.map