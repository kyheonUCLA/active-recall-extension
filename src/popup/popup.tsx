import React from "react";
import Input from "./components/Input";
import TextArea from "./components/TextArea";
import './popup.css'
import TitleBar from "./components/TitleBar";

const Popup = () => {
	return (
		<main className="">
			<TitleBar />
			<Input />
			<TextArea />
		</main>
	)
};

export default Popup;