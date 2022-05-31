import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState ={
    userProfile:false,
}

export const ContextProvider =({children}) => {
    
    const [activeMenu, setActiveMenu] = useState(true);
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);
      };
    return (
        <StateContext.Provider value={{ currentColor, setActiveMenu, activeMenu, setCurrentColor }}>
        {children}
      </StateContext.Provider>
    )
}

export const useStateContext =() => useContext(StateContext);