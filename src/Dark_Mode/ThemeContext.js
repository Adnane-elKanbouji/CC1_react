import { createContext, useContext, useState } from "react";


export const ThemeContext=createContext()

 export default function ThemeContextProvider({children}) {
    const [CTheme,setCTheme]=useState("light")
   return (
    <ThemeContext.Provider value={{CTheme,setCTheme}}>
        {children}
    </ThemeContext.Provider>
   )
 }
 export const useThemeContext=()=>{
    const context=useContext(ThemeContext)
    return context
 }