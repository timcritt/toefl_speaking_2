import { useState, useEffect, useCallback } from "react";

const useSpeakingPart2 = (customModeEnum, initialMode, testsURL) => {
	const [mode, _setMode] = useState(initialMode);
	const [tests, setTests] = useState([]);
	const [currentTest, setCurrentTest] = useState();
	const [time, setTime] = useState(30000);

	// Validate and set mode
	const setMode = useCallback(
		(newMode) => {
			if (Object.values(customModeEnum).includes(newMode)) {
				_setMode(newMode);
			} else {
				console.warn(
					`Invalid mode: "${newMode}". Must be one of`,
					Object.values(customModeEnum)
				);
			}
		},
		[customModeEnum]
	);

	const loadTest = (test) => {
		setCurrentTest(test);
		console.log(test);
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(testsURL);
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

	return {
		mode,
		setMode,
		modeEnum: customModeEnum,
		tests,
		currentTest,
		setCurrentTest,
		loadTest,
		time,
		setTime,
	};
};

export default useSpeakingPart2;
