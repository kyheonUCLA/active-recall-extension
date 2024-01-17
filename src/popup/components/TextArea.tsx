import React, { FC } from "react";

type TextAreaProps = {

}

const TextArea: FC = () => {
  return (
    <section className="mt-2 mx-5">
      <label className="block mb-1 text-sm font-medium text-white bg-gray-950">
        Input Text
      </label>
      <textarea className="text-sm text-white p-2.5
     bg-gray-900 rounded-sm border-2 w-full h-44 max-w-screen-lg" 
      placeholder="Copy & paste all info here for generating review questions">
      </textarea>
      <div className="flex flex-row float-right space-x-2 mt-2">
        <CopyButton />
        <SaveButton />
      </div>
      
    </section>
  )
}

const SaveButton: FC = () => {
  return (
    <button className="text-white bg-purple-500 hover:bg-purple-700 font-medium 
    rounded-lg text-sm px-5 py-1">
    Save
    </button>
  )
}

const CopyButton: FC = () => {
  return (
    <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium
    rounded-lg text-sm px-5 py-1">
    Copy Entire Page
    </button>
  )
}

export default TextArea;