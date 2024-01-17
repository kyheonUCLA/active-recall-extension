import React, { FC, useState, useEffect } from "react";
import { BsSun, BsMoon } from "react-icons/bs"
import { getCompletion } from "../../assets/api";
import { useActiveTabContext } from "../../context/ActiveTabContextProvider";

const Widget: FC = () => {
  const { data } = useActiveTabContext();
  const prompt = "name one animal";
  
  return (
    <button
      className="visible fixed bottom-5 right-5 bg-gray-400 w-[3rem] h-[3rem] 
      bg-opacity-80 backdrop-blur-[0.5rem] border border-black border-opacity-40 
      shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] 
      active:scale-105 transition-all dark:bg-gray-950" onClick={() => getCompletion(prompt)}>
      <BsSun />
    </button>
  )
}

export default Widget;