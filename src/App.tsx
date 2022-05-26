import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import ErrorPage from "./components/ErrorPage";
import "./App.scss";

function App() {
	return (
		<Suspense fallback="loading">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</Suspense>
	);
}

export default App;
