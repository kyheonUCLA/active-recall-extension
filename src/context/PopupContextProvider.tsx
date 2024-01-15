import React, { FC, createContext, useContext, useState } from "react";

type InputType = {
  url: string,
  text: string,
}

type PopupContextProviderProps = {
  children: React.ReactNode,
}

type ContextType = {
  data: InputType,
  setData: React.Dispatch<React.SetStateAction<InputType>>,
}

const Context = createContext<ContextType | null>(null);

const PopupContextProvider: FC<PopupContextProviderProps> = ({ children }) => {
  const [data, setData] = useState<InputType>({url: "", text: ""});

  return (
    <Context.Provider value={
      {
        data, setData
      }}>
      {children}
    </Context.Provider>
  )
}

const usePopupContext = () => {
  const context = useContext(Context);

  if (context === null) {
    throw new Error("must be used within PopupContextProvider block")
  }
  return context;
}


export default PopupContextProvider;
export { usePopupContext };