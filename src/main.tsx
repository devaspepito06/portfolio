import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Navbar, Footer } from "./components/layout";
import { App } from "./App";
import "./styles";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Navbar />
		<App />
		{/*<Footer />*/}
	</StrictMode>,
);
