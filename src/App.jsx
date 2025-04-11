import { Route, Routes } from "react-router-dom";

import SpeakingPart2Container from "./components/SpeakingPart2/SpeakingPart2Container";
import SpeakingPart3Container from "./components/SpeakingPart3/SpeakingPart3Container";
import Header from "./components/Header/Header";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/part_1" />
				<Route path="/part_2" element={<SpeakingPart2Container />} />
				<Route path="/part_3" element={<SpeakingPart3Container />} />
				<Route path="/part_4" />
			</Routes>
		</>
	);
}

export default App;
