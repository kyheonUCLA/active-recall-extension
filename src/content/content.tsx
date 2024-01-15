import React, { FC, useState, useEffect } from "react";
import Widget from "../components/Widget";

type Highlighted = {
  text: string | null, 
  context: string | null,
}

const Content: FC = () => {
  const [highlighted, setHighlighted] = useState<Highlighted | null>(null)

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
        return null
      }
    }
    const handleMouseup = () => {
      setHighlighted(getSelectionData());
    }
    document.addEventListener('mouseup', handleMouseup);
  }, [])



  return (
    <>
      <Widget />
      <div className="visible">
        {highlighted !== null ? <div><h1 className="text-lg font-bold">{highlighted.text}</h1><p className="italic">{highlighted.context}</p></div> : <></>}
      </div>
    </>
  )
}

export default Content;