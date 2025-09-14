"use client"

import { createContext, use, useState } from "react";


export default ThemeContext = createContext ()

const getFromLocalStorage = () => {

    if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || "light";
    }
};
export const ThemeProvider = ({children}) => 
    {
        const [theme, setTheme] = useState(() => {
            return getFromLocalStorage();
        });
        return <ThemeProvider.Provider>
            {children}
        </ThemeProvider.Provider>;
    };

