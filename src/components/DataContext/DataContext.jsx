import React, {useState} from 'react';
import dataJson from '../../phone.json';

export const DataContext = React.createContext("");
export default function Context({children}) {
    const [themeValue, setThemeValue] = useState("white");
    const [products, setProducts] = useState(dataJson.data);
    
    const switchTheme = () => {
        if (themeValue === "white") {
            setThemeValue("black");
        } else {
            setThemeValue("white");
        }
    }

    const sendProducts = (products) => {
        setProducts(products)
    }
    return (
        <DataContext.Provider value={{theme: themeValue, switchTheme, products, sendProducts}}>
            {children}
        </DataContext.Provider>
    )
}