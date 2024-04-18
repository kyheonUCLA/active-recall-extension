import React, { FC, useState, useEffect } from "react";
import { BsSun, BsMoon } from "react-icons/bs"
import { useActiveTabContext } from "../../context/ActiveTabContextProvider";
import type { RequestMessageType, ResponseMessageType } from "../../assets/types";

const Widget: FC = () => {
  const { tabData } = useActiveTabContext();


  const handleClick = async () => {
    const phone = await chrome.storage.local.get("phone")

    console.log('message', {...tabData, phone})
    chrome.runtime.sendMessage({ 
      type: "CREATE_QUIZ_REQUEST",  // requesting to send tabData to the server
      body: { ...tabData, phone, prompt: tabData.context}
    } as RequestMessageType, (messageRes: ResponseMessageType) => {
      console.log("response", messageRes)
      if (messageRes.success) {
        console.log(messageRes);
			} else {
				console.log("Create quiz not recieved")
			}
    });
  };


  return (
    <button
      className="z-[9999] fixed bottom-16 right-5 bg-gray-400 w-[3rem] h-[3rem] 
      bg-opacity-80 backdrop-blur-[0.5rem] border border-black border-opacity-40 
      shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] 
      active:scale-105 transition-all dark:bg-gray-950" onClick={handleClick}>
      <BsMoon />
    </button>
  );
};

export default Widget;
