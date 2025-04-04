import { useState } from "react";

import CountdownTimer from "./CountdownTimer";

import styles from "./App.module.css";

function App() {
	const modeEnum = Object.freeze({
		READ: "READ",
		LISTEN: "LISTEN",
		PREPARE: "PREPARE",
		SPEAK: "SPEAK",
	});

	const [mode, setMode] = useState(modeEnum.READ);
	const [time, setTime] = useState(30000);

	return (
		<>
			<h1>Question 2</h1>
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

			{mode === modeEnum.READ && (
				<>
					<article className={styles.announcement}>
						<h2>Students Need Access to Movie Collection</h2>
						<p>
							The university library has a large collection of films on video
							and DVD that students can borrow. However, students aren't allowed
							to go into the area where these items are kept. Instead, students
							need to request a movie title, and then library staff get it for
							them. I think students should be allowed to go into the area where
							the videos and DVDS are kept. First, it will be easier for
							students to choose a good movie because then they can easily see
							what is available. Also, if students can get movies themselves,
							the university won't have to pay extra library staff to help
							students.
						</p>
						<p>Sincerely,</p>
						<p>Rebecca Smith</p>
					</article>
					<div className={styles.timer_container}>
						<CountdownTimer time={45000} />
					</div>
				</>
			)}
			{mode === modeEnum.LISTEN && (
				<article className={styles.announcement}>
					<img src="/src/assets/question_two_1.png" className={styles.image} />
					<audio controls>
						<source
							src="/src/assets/TOEFL speaking mock 2 2021 8.wav"
							type="audio/wav"
						/>
					</audio>
				</article>
			)}
			{(mode === modeEnum.PREPARE || mode === modeEnum.SPEAK) && (
				<>
					<article className={styles.announcement}>
						<h2>Recording</h2>
						<p>
							The man expresses his opinion about the proposal described in the
							letter. Briefly summarise the proposal. Then state his opinion
							about the proposal and explain the reasons he gives for holding
							that opinion.
						</p>
					</article>
					<div className={styles.timer_container}>
						<CountdownTimer time={time} />
					</div>
				</>
			)}
		</>
	);
}

export default App;
