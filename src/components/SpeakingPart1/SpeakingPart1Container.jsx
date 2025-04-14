import { useEffect, useState } from "react";
import CountdownTimer from "@/components/CountdownTimer/CountdownTimer";
import styles from "./SpeakingPart1.module.css";
import Tag from "@/components/Tag/Tag";
import ToggleSwitch from "@/components/ToggleSwitch/ToggleSwitch";
import TestWrapper from "@/components/TestWrapper/TestWrapper";

const SpeakingPart1Container = () => {
	const [time, setTime] = useState(15000);
	const [topics, setTopics] = useState([]); // List of topic names
	const [topicData, setTopicData] = useState({}); // Full JSON object
	const [currentTopic, setCurrentTopic] = useState("Education");
	const [question, setQuestion] = useState("");

	const prepare = () => setTime(15000);
	const speak = () => setTime(45000);

	const modeEnum = Object.freeze({
		PREPARE: "PREPARE",
		SPEAK: "SPEAK",
	});

	const modeTimeEnum = {
		[modeEnum.PREPARE]: 15,
		[modeEnum.SPEAK]: 45,
	};

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
		<>
			<ToggleSwitch
				mode={mode}
				setMode={setMode}
				modeEnum={modeEnum}
				setTime={setTime}
				modeTimeEnum={modeTimeEnum}
			/>
			<TestWrapper>
				{question && (
					<div className={styles.question_container}>
						<p className={styles.question}>{question.question}</p>
						{question.choices && (
							<ul className={styles.choices}>
								{question.choices.map((choice, index) => (
									<li key={index} className={styles.option}>
										{choice}
									</li>
								))}
							</ul>
						)}
					</div>
				)}
				<hr />
				<p className={styles.time_instructions}>Preparation Time: 15 seconds</p>
				<p className={styles.time_instructions}> Record Time: 45 seconds</p>
			</TestWrapper>

			<CountdownTimer time={time} />
			<aside className={styles.tags_container}>
				{topics.map((topic) => (
					<Tag
						key={topic}
						tagName={topic}
						handleSetTag={handleTopicChange}
						selected={currentTopic === topic}
					/>
				))}
			</aside>
		</>
	);
};

export default SpeakingPart1Container;
