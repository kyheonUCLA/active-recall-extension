import React, { useEffect, useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

import './popup.css'

import type { RequestMessageType, ResponseMessageType } from "../assets/types";


const Popup = () => {

	return (
		<main>
			{/* <Router>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/register" element={<Register />} />
				</Routes>
			</Router> */}
			<Home />
		</main>
	)
};

export default Popup;