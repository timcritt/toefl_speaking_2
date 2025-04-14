import { Route, Routes } from "react-router-dom";

import SpeakingPart2Container from "./components/SpeakingPart2/SpeakingPart2Container";
import SpeakingPart3Container from "./components/SpeakingPart3/SpeakingPart3Container";
import SpeakingPart4Container from "./components/SpeakingPart4/SpeakingPart4Container";
import SpeakingPart1Container from "./components/SpeakingPart1/SpeakingPart1Container";
import Header from "./components/Header/Header";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/part_1" element={<SpeakingPart1Container />} />
				<Route path="/part_2" element={<SpeakingPart2Container />} />
				<Route path="/part_3" element={<SpeakingPart3Container />} />
				<Route path="/part_4" element={<SpeakingPart4Container />} />
			</Routes>
		</>
	);
}

export default App;
