import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import store from "./store/store.js";
import { Provider } from "react-redux";
import AppWrapper from "./components/AppWrapper/AppWrapper.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				{/* Wrap the App in AppWrapper to handle global logout on token expiration*/}
				<AppWrapper>
					<App />
				</AppWrapper>
			</BrowserRouter>
		</Provider>
	</StrictMode>
);
