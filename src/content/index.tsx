import React from "react";
import { createRoot } from "react-dom/client";
import ActiveTabContextProvider from "../context/ActiveTabContextProvider";
import Content from "./content";
import '../assets/tailwind.css'


function init() {
	const appContainer = document.createElement('div')
	appContainer.id = "shadow-root";
	//appContainer.classList.add('invisible');
	if (!appContainer) {
		throw new Error("Can not find AppContainer");
	}

	//const shadowRoot = appContainer.attachShadow({ mode: 'open' });
  //const root = createRoot(shadowRoot);

	const root = createRoot(appContainer)


	document.body.appendChild(appContainer);
	root.render(
		<React.StrictMode>
			<ActiveTabContextProvider>
				<Content />
			</ActiveTabContextProvider>
		</React.StrictMode>
	);
}

init();