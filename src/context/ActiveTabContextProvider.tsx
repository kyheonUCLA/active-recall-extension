import React, { FC, createContext, useContext, useState } from "react";
import type { DataType } from "../assets/types";

type ContextType = {
  data: DataType,
  setData: React.Dispatch<React.SetStateAction<DataType>>,
}

const Context = createContext<ContextType | null>(null);

type ActiveTabContextProviderProps = {
  children: React.ReactNode,
}
const ActiveTabContextProvider: FC<ActiveTabContextProviderProps> = ({ children }) => {
  const [data, setData] = useState<DataType>({text: "", context: "", url: ""});

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