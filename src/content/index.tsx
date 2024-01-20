import React from "react";
import { createRoot } from "react-dom/client";
import ActiveTabContextProvider from "../context/ActiveTabContextProvider";
import Content from "./content";
import '../assets/tailwind.css'

function init() {
	const appContainer = document.getElementById('active-recall-shadow-root').shadowRoot;
	if (!appContainer) {
		throw new Error("Can not find AppContainer");
	}
	
	const root = createRoot(appContainer)
	root.render(
		<React.StrictMode>
			<ActiveTabContextProvider>
				<Content />
			</ActiveTabContextProvider>
		</React.StrictMode>
	);
}

init();