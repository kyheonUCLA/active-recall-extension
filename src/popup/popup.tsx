import React, { useEffect, useState } from "react";
import './popup.css'

import Input from "./components/Input";
import TextArea from "./components/TextArea";
import TitleBar from "./components/TitleBar";

import type { MessageType } from "../assets/types";


const Popup = () => {
	const [test, setTest] = useState<MessageType | null>(null)

	useEffect(() => {
		chrome.runtime.onMessage.addListener((message: MessageType) => {
			setTest({...message})
		});
	}, [setTest]);
 
	console.log(test)

	return (
		<main className="">
			<TitleBar />
			<Input />
			<TextArea />
			{test ? <div className="text-white">{JSON.stringify(test)}</div> : <div className="text-white">does this work?</div> }
		</main>
	)
};

export default Popup;