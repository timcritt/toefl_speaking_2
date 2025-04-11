import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import SpeakingPart2Container from "./components/SpeakingPart2/SpeakingPart2Container";

function App() {
	return (
		<>
			<Router>
				<nav></nav>
				<Routes>
					<Route path="/part_1" element={<SpeakingPart2Container />} />
					<Route path="/part_2" />
					<Route path="/part_3" />
					<Route path="/part_4" />
				</Routes>
			</Router>
		</>
	);
}

export default App;
