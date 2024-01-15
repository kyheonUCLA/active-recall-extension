import React, { FC, useState, useEffect } from "react";
import { BsSun, BsMoon } from "react-icons/bs"



const Widget: FC = () => {
  return (
    <button
      className="visible fixed bottom-5 right-5 bg-gray-400 w-[3rem] h-[3rem] 
      bg-opacity-80 backdrop-blur-[0.5rem] border border-black border-opacity-40 
      shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] 
      active:scale-105 transition-all dark:bg-gray-950">
      <BsSun />
    </button>
  )
}

export default Widget;