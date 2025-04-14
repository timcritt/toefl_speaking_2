import { useEffect, useState } from "react";
import SpeakingPart1Presentation from "./SpeakingPart1Presentation";

const SpeakingPart1Container = () => {
	const modeEnum = Object.freeze({
		PREPARE: "PREPARE",
		SPEAK: "SPEAK",
	});

	const modeTimeEnum = {
		[modeEnum.PREPARE]: 15,
		[modeEnum.SPEAK]: 45,
	};

	const [time, setTime] = useState(modeTimeEnum.PREPARE * 1000); // Time in milliseconds
	const [topics, setTopics] = useState([]); // List of topic names
	const [topicData, setTopicData] = useState({}); // Full JSON object
	const [currentTopic, setCurrentTopic] = useState("Education");
	const [question, setQuestion] = useState("");

	const [mode, setMode] = useState(modeEnum.PREPARE);

	const getTopics = async () => {
		try {
			const response = await fetch("/questions_part_1.json");
			if (!response.ok)
				throw new Error(`HTTP error! status: ${response.status}`);

			const data = await response.json();
			console.log("Fetched data:", data);

			setTopicData(data);
			const keys = Object.keys(data);
			setTopics(keys);

			if (keys.length > 0) {
				setCurrentTopic(keys[0]); // Set current topic to the first one
				setQuestion(data[keys[0]][0]); // Set the first question directly
			}
		} catch (error) {
			console.error("Failed to load JSON:", error);
		}
	};

	const getQuestion = (topic) => {
		console.log("Getting question for topic:", topic);
		const questions = topicData[topic];
		if (!questions || questions.length === 0) {
			console.log("No questions found for this topic.");
			setQuestion("No questions available.");
			return;
		}

		const randomIndex = Math.floor(Math.random() * questions.length);
		const selected = questions[randomIndex];
		setQuestion(selected);
	};

	const handleTopicChange = (topic) => {
		setCurrentTopic(topic);
		getQuestion(topic);
	};

	useEffect(() => {
		getTopics();
	}, []);

	return (
		<SpeakingPart1Presentation
			topics={topics}
			question={question}
			mode={mode}
			setMode={setMode}
			modeEnum={modeEnum}
			modeTimeEnum={modeTimeEnum}
			time={time}
			setTime={setTime}
			handleTopicChange={handleTopicChange}
			currentTopic={currentTopic}
		/>
	);
};

export default SpeakingPart1Container;
