import React, { FC, useState, useEffect } from "react";
import Widget from "../components/Widget";
import { useActiveTabContext } from "../context/ActiveTabContextProvider";

type TabInfo = {
  text: string | null, 
  context: string | null,
}

const Content: FC = () => {
  const { data, setData } = useActiveTabContext();
  
  useEffect( () => {
    const getSelectionData = () => {
      const selection = window.getSelection();
      const parentNode = selection?.anchorNode?.parentNode;
      const text = selection?.toString().trim();
      if ((text && text.length > 0) && parentNode) {
        return {
          text: text, 
          context: parentNode.textContent,
        }
      } else {
        return { text: "", context: ""};
      }
    }
    
    document.addEventListener('mouseup', () => setData(getSelectionData()));
  }, [])



  return (
    <>
      <Widget />
      <div className="visible">
        {data !== null ? <div><h1 className="text-lg font-bold">{data.text}</h1><p className="italic">{data.context}</p></div> : <></>}
      </div>
    </>
  )
}

export default Content;