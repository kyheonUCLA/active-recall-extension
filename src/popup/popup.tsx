import React, { useEffect, useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import './popup.css'

// import Input from "./components/Input";
// import TextArea from "./components/TextArea";
// import TitleBar from "./components/TitleBar";


import type { RequestMessageType, ResponseMessageType } from "../assets/types";

const Popup = () => {

	// some UI component when clicked...
	const handleClick = () => {
    chrome.runtime.sendMessage({ 
      type: "SEND_POPUP_DATA_REQUEST", 
      body: "popup data here" 
    } as RequestMessageType, (messageRes: ResponseMessageType) => {
      if (messageRes.success) {
				console.log("POPUP_DATA successfully sent to server")
			} else {
				console.log("POPUP_DATA not recieved")
			}
    });
  };

	return (
		<main>
			<Router>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/register" element={<Register />} />
				</Routes>
			</Router>
		</main>
	)
};

export default Popup;