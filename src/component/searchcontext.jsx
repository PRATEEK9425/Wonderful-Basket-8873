import { createContext } from "react";
import { useState } from "react";
export const SearchContext = createContext()

export default function SearchContextProvider({children}){
const [text,setText] = useState("")
    return( 
<SearchContext.Provider value={{text,setText}}>
    {children}
</SearchContext.Provider>
    )
}