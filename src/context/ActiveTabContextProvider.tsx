import React, { FC, createContext, useContext, useState } from "react";
import type { TabDataType } from "../assets/types";

type ActiveTabContextProviderType = {
  tabData: TabDataType,
  setTabData: React.Dispatch<React.SetStateAction<TabDataType>>,
}

const ActiveTabContext = createContext<ActiveTabContextProviderType | null>(null);

type ActiveTabContextProviderProps = {
  children: React.ReactNode,
}
const ActiveTabContextProvider: FC<ActiveTabContextProviderProps> = ({ children }) => {
  const [tabData, setTabData] = useState<TabDataType>({text: "", context: "", url: ""});

  return (
    <ActiveTabContext.Provider value={
      {
        tabData, setTabData
      }}>
      {children}
    </ActiveTabContext.Provider>
  )
}

const useActiveTabContext = () => {
  const context = useContext(ActiveTabContext);

  if (context === null) {
    throw new Error("must be used within PopupContextProvider block")
  }
  return context;
}


export default ActiveTabContextProvider;
export { useActiveTabContext };