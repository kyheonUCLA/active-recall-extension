import React, { useEffect, useState } from "react";
import './popup.css'

import Input from "./components/Input";
import TextArea from "./components/TextArea";
import TitleBar from "./components/TitleBar";

import type { MessageType } from "../assets/types";


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