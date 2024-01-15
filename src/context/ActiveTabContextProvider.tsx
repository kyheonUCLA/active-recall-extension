import React, { FC, createContext, useContext, useState } from "react";

type TabInfo = {
  text: string,
  context: string,
}

type ActiveTabContextProviderProps = {
  children: React.ReactNode,
}

type ContextType = {
  data: TabInfo,
  setData: React.Dispatch<React.SetStateAction<TabInfo>>,
}

const Context = createContext<ContextType | null>(null);

const ActiveTabContextProvider: FC<ActiveTabContextProviderProps> = ({ children }) => {
  const [data, setData] = useState<TabInfo>({text: "", context: ""});

  return (
    <Context.Provider value={
      {
        data, setData
      }}>
      {children}
    </Context.Provider>
  )
}

const useActiveTabContext = () => {
  const context = useContext(Context);

  if (context === null) {
    throw new Error("must be used within PopupContextProvider block")
  }
  return context;
}


export default ActiveTabContextProvider;
export { useActiveTabContext };