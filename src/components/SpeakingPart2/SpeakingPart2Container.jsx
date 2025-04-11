import SpeakingPart2Presentation from "./SpeakingPart2Presentation";
import { useState, useEffect } from "react";

const modeEnum = Object.freeze({
	READ: "READ",
	LISTEN: "LISTEN",
	PREPARE: "PREPARE",
	SPEAK: "SPEAK",
});

const SpeakingPart2Container = () => {
	const [mode, setMode] = useState(modeEnum.READ);
	const [tests, setTests] = useState([]);
	const [currentTest, setCurrentTest] = useState();
	const [time, setTime] = useState(30000);

	const loadTest = (test) => {
		setCurrentTest(test);
		console.log(test);
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch("./speaking_part_2.json");
				if (!res.ok) throw new Error("Fetch failed");
				const json = await res.json();
				setTests(json);
				console.log(json);
			} catch (err) {
				console.error("Error:", err);
			}
		};

		fetchData();
	}, []);
	return (
		<SpeakingPart2Presentation
			mode={mode}
			setMode={setMode}
			modeEnum={modeEnum}
			currentTest={currentTest}
			setCurrentTest={setCurrentTest}
			tests={tests}
			loadTest={loadTest}
			time={time}
			setTime={setTime}
		/>
	);
};

export default SpeakingPart2Container;
