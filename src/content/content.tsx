import React, { FC, useState, useEffect } from "react";
import Widget from "./components/Widget";
import TestConsole from "./components/TestBox";

import { useActiveTabContext } from "../context/ActiveTabContextProvider";
import { getSelectedText, getSelectedContext, getCurrentURL } from "../assets/utils/scraper";

const Content: FC = () => {
  const { data, setData } = useActiveTabContext();

  useEffect( () => {  
    document.addEventListener('mouseup', () => setData({
      text: getSelectedText(),
      context: getSelectedContext(),
      url: getCurrentURL(),
    }));
  }, [setData])


  return (
    <div className="visible">
      <TestConsole>
        {data !== null ? <p className=" px-1 text-sm font-bold overflow-hidden">{data.text}</p> : null}
      </TestConsole>
      <Widget />
    </div>
  )
}

export default Content;