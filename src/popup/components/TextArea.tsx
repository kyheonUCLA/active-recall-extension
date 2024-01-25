import React, { FC, useState } from "react";
import { saveInput } from "../../assets/api";

type TextAreaProps = {};

const TextArea: FC = () => {
  const [inputText, setInputText] = useState<string>("");

  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInputText(event.target.value);
  };

  return (
    <section className="mt-2 mx-5">
      <label className="block mb-1 text-sm font-medium text-white bg-gray-950">
        Input Text
      </label>
      <textarea
        className="text-sm text-white p-2.5
     bg-gray-900 rounded-sm border-2 w-full h-44 max-w-screen-lg"
        placeholder="Copy & paste all info here for generating review questions"
        value={inputText}
        onChange={handleTextAreaChange}
      ></textarea>
      <div className="flex flex-row float-right space-x-2 mt-2">
        <CopyButton />
        <SaveButton inputText={inputText} setInputText={setInputText} />
      </div>
    </section>
  );
};

interface SaveButtonProps {
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
}

const SaveButton: FC<SaveButtonProps> = ({ inputText, setInputText }) => {
  const handleSaveClick = async () => {
    saveInput(inputText);
    setInputText("");
  };

  return (
    <button
      className="text-white bg-purple-500 hover:bg-purple-700 font-medium 
    rounded-lg text-sm px-5 py-1"
      onClick={() => {
        handleSaveClick();
      }}
    >
      Save
    </button>
  );
};

const CopyButton: FC = () => {
  return (
    <button
      className="text-white bg-blue-700 hover:bg-blue-800 font-medium
    rounded-lg text-sm px-5 py-1"
    >
      Copy Entire Page
    </button>
  );
};

export default TextArea;
