import React, { FC, useState, useEffect } from "react";
import Widget from "./components/Widget";
import TestConsole from "./components/TestBox";

import { useActiveTabContext } from "../context/ActiveTabContextProvider";
import { getSelectedText, getSelectedContext } from "../assets/utils/scraper";

type TabInfo = {
  text: string | null, 
  context: string | null,
}

const Content: FC = () => {
  const { data, setData } = useActiveTabContext();
  const newData = {
    text: getSelectedText(),
    context: getSelectedContext()
  }

  useEffect( () => {  
    document.addEventListener('mouseup', () => setData({
      text: getSelectedText(),
      context: getSelectedContext()
    }));
  }, [setData])



  return (
    <>
      <TestConsole>
        
        {data !== null ? <p className=" px-1 text-sm font-bold">{data.text}</p> : null}
        
      </TestConsole>
      <Widget />
    </>
  )
}

export default Content;