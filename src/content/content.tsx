import React, { FC, useEffect } from "react";
import Widget from "./components/Widget";
import TestConsole from "./components/TestBox";

import { useActiveTabContext } from "../context/ActiveTabContextProvider";
import scraper from "../assets/utils/scraper";

const Content: FC = () => {
  const { tabData, setTabData } = useActiveTabContext();

  useEffect( () => {  
    const handleMouseUp = () => {
      setTabData({
        text: scraper.getSelectedText(),
        context: scraper.getSelectedContext(),
        url: scraper.getCurrentURL(),
      })
    }

    // attach event handler to DOM
    document.addEventListener('mouseup', handleMouseUp );

    // cleanup to prevent memory leaks
    return () => { 
      document.removeEventListener('mouseup', handleMouseUp);
    }
  }, [setTabData])


  return (
    <div className="visible">
      <TestConsole>
        {tabData !== null ? <p className=" px-1 text-sm font-bold overflow-hidden">{tabData.text}</p> : null}
      </TestConsole>
      <Widget />
    </div>
  )
}

export default Content;