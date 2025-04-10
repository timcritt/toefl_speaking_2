import { useEffect, useState } from "react";

import CountdownTimer from "./CountdownTimer";
import questionImage from "./assets/question_two_1.png";

//import tests from "./assets/speaking_part_2.json";

import styles from "./App.module.css";

function App() {
	const modeEnum = Object.freeze({
		READ: "READ",
		LISTEN: "LISTEN",
		PREPARE: "PREPARE",
		SPEAK: "SPEAK",
	});

	const [tests, setTests] = useState([]);
	const [currentTest, setCurrentTest] = useState();

	const [mode, setMode] = useState(modeEnum.READ);
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
		<>
			<h1>Question 2</h1>
			<nav>
				<ul className={styles.test_list}>
					{Object.entries(tests).map(([key, value]) => (
						<li
							onClick={() => loadTest(value)}
							key={key}
							className={`${
								value.announcement.title === currentTest?.announcement.title
									? styles.active_test_link
									: ""
							}`}
						>
							{value.announcement.title}
						</li>
					))}
				</ul>
			</nav>
			<div className={styles.toggle_group}>
				<input
					type="radio"
					name="mode"
					id="read"
					value="read"
					checked={mode === modeEnum.READ}
					onChange={() => setMode(modeEnum.READ)}
				/>
				<label htmlFor="read">Read</label>

				<input
					type="radio"
					name="mode"
					id="listen"
					value="listen"
					checked={mode === modeEnum.LISTEN}
					onChange={() => setMode(modeEnum.LISTEN)}
				/>
				<label htmlFor="listen">Listen</label>
				<input
					type="radio"
					name="mode"
					id="prepare"
					value="preare"
					checked={mode === modeEnum.PREPARE}
					onChange={() => {
						setTime(30000);
						setMode(modeEnum.PREPARE);
					}}
				/>
				<label htmlFor="prepare">Prepare</label>
				<input
					type="radio"
					name="mode"
					id="speak"
					value="speak"
					checked={mode === modeEnum.SPEAK}
					onChange={() => {
						setMode(modeEnum.SPEAK);
						setTime(60000);
					}}
				/>
				<label htmlFor="speak">Speak</label>
			</div>

			{mode === modeEnum.READ && currentTest && (
				<>
					<article className={styles.announcement}>
						<h2>{currentTest.announcement.title}</h2>
						<p>{currentTest.announcement.body}</p>
						{currentTest.announcement.author && (
							<>
								<p>Sincerely,</p>
								<p>{currentTest.announcement.author}</p>
							</>
						)}
					</article>

					<article className={styles.announcement}>
						<div className={styles.timer_container}>
							<CountdownTimer time={45000} />
						</div>
					</article>
				</>
			)}
			{mode === modeEnum.LISTEN && currentTest && (
				<article className={styles.announcement}>
					<img src={questionImage} className={styles.image} />
					<audio controls>
						<source src={currentTest.audio} type="audio/wav" />
					</audio>
				</article>
			)}
			{(mode === modeEnum.PREPARE || mode === modeEnum.SPEAK) &&
				currentTest && (
					<>
						<article className={styles.announcement}>
							<p>{currentTest.question}</p>
						</article>
						<section className={styles.announcement}>
							{mode === modeEnum.PREPARE && (
								<span className={styles.instruction}>
									Prepare your response
								</span>
							)}
							{mode === modeEnum.SPEAK && (
								<span className={styles.instruction}>Give your response</span>
							)}
							<div className={styles.timer_container}>
								<CountdownTimer time={time} />
							</div>
						</section>
					</>
				)}
		</>
	);
}

export default App;
