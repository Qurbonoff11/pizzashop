import { createContext, useContext, useState } from "react";

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("Show All");

  return (
    <MenuContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);
