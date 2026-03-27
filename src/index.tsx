import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Pricing from "./Pricing";
import PrivacyPolicy from "./PrivacyPolicy";

const rootEl = document.getElementById("root");
if (rootEl) {
	const root = ReactDOM.createRoot(rootEl);
	root.render(
		<React.StrictMode>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<App />} />
					<Route path="/pricing" element={<Pricing />} />
					<Route path="/privacy" element={<PrivacyPolicy />} />
				</Routes>
			</BrowserRouter>
		</React.StrictMode>,
	);
}
