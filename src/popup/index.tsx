import React from "react";
import { createRoot } from "react-dom/client";
import '../assets/tailwind.css'
import PopupContextProvider from "../context/PopupContextProvider";
import Popup from "./popup";

function init() {
	const appContainer = document.createElement('div')
	if (!appContainer) {
		throw new Error("Can not find AppContainer");
	}
	document.body.appendChild(appContainer)
	const root = createRoot(appContainer)
	root.render(
		<React.StrictMode>
			<PopupContextProvider>
				<Popup />
			</PopupContextProvider>
		</React.StrictMode>
	);
}

init();