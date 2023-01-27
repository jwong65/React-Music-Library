import { createContext } from "react";

export const SearchContext = createContext({
    //To refactor this Context, term will be the search term
    term: '',
    handleSearch: () =>{}
})