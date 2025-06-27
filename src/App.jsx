import { Route, Routes, Navigate } from "react-router-dom"; // ← Add Navigate

import SpeakingPart2Container from "@/views/SpeakingPart2/SpeakingPart2Container";
import SpeakingPart3Container from "@/views/SpeakingPart3/SpeakingPart3Container";
import SpeakingPart4Container from "@/views/SpeakingPart4/SpeakingPart4Container";
import SpeakingPart1Container from "@/views/SpeakingPart1/SpeakingPart1Container";
import Header from "@/components/Header/Header";
import Login from "@/views/Login/Login";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";

function App() {
	return (
		<>
			<Header />
			<Routes>
				{/* Redirect from root to login */}
				<Route path="/" element={<Navigate to="/login" replace />} />

				{/* Public route */}
				<Route path="/login" element={<Login />} />

				{/* Protected routes */}
				<Route element={<PrivateRoute />}>
					<Route path="/part_1" element={<SpeakingPart1Container />} />
					<Route path="/part_2" element={<SpeakingPart2Container />} />
					<Route path="/part_3" element={<SpeakingPart3Container />} />
					<Route path="/part_4" element={<SpeakingPart4Container />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
