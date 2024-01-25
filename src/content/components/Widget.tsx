import React, { FC, useState, useEffect } from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import { getCompletion } from "../../assets/api";
import { useActiveTabContext } from "../../context/ActiveTabContextProvider";
import type { MessageType } from "../../assets/types";

const Widget: FC = () => {
  const { data } = useActiveTabContext();

  const foo = () => {
    chrome.runtime.sendMessage({
      type: "CONTENT_DATA_RESPONSE",
      data: data,
    } as MessageType);
  };

  return (
    <button
      className="visible fixed bottom-5 right-5 bg-gray-400 w-[3rem] h-[3rem] 
      bg-opacity-80 backdrop-blur-[0.5rem] border border-black border-opacity-40 
      shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] 
      active:scale-105 transition-all dark:bg-gray-950"
      onClick={() => getCompletion("name an animal")}
    >
      <BsMoon />
    </button>
  );
};

export default Widget;
