import React, {useState} from 'react';

export const ThemeContext = React.createContext("");
export default function Context({children}) {
    const [themeValue, setThemeValue] = useState("white");
    
    const switchTheme = () => {
        if (themeValue === "white") {
            setThemeValue("black");
        } else {
            setThemeValue("white");
        }
    }
    return (
        <ThemeContext.Provider value={{theme: themeValue, switchTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}