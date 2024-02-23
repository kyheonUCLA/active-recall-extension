import React, { FC, useState, useEffect } from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import { saveInput } from "../../assets/api";
import { useActiveTabContext } from "../../context/ActiveTabContextProvider";
import type { RequestMessageType, ResponseMessageType } from "../../assets/types";

const Widget: FC = () => {
  const { tabData } = useActiveTabContext();

  const handleClick = () => {
    chrome.runtime.sendMessage({ 
      type: "SEND_TAB_DATA_REQUEST",  // requesting to send tabData to the server
      body: tabData 
    } as RequestMessageType, (messageRes: ResponseMessageType) => {
      if (messageRes.success) {
				console.log("TAB_DATA successfully sent to server")
        console.log(messageRes.data?.choices[0].message.content);
			} else {
				console.log("TAB_DATA not recieved")
			}
    });
  };

  return (
    <button
      className="fixed bottom-5 right-5 bg-gray-400 w-[3rem] h-[3rem] 
      bg-opacity-80 backdrop-blur-[0.5rem] border border-black border-opacity-40 
      shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] 
      active:scale-105 transition-all dark:bg-gray-950" onClick={handleClick}>
      <BsMoon />
    </button>
  );
};

export default Widget;
