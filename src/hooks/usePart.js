import { useState, useEffect, useCallback } from "react";

const usePart = (customModeEnum, initialMode, fetchAllTasks, fetchTaskById) => {
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

	const loadTest = async (testId) => {
		if (testId) {
			const result = await fetchTaskById(testId);
			setCurrentTest(result);
			console.log("Loaded test:", result);
		} else {
			console.warn("Tried to load an invalid test:", testId);
		}
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetchAllTasks(); // already the raw data
				console.log("Fetched tests:", data);
				setTests(data);

				const firstTest = data?.[0];
				console.log("First test:", firstTest.id);
				if (firstTest) loadTest(firstTest.id);
			} catch (err) {
				console.error("Error fetching tests:", err);
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

export default usePart;
