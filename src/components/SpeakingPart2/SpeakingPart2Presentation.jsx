import SideBarNav from "../SideNavBar";
import CountdownTimer from "../CountdownTimer";

import styles from "./SpeakingPart2.module.css";
import questionImage from "../../assets/question_two_1.png";

const SpeakingPart2Presentation = ({
	tests,
	loadTest,
	currentTest,
	mode,
	setTime,
	setMode,
	modeEnum,
	time,
}) => {
	return (
		<>
			<h1>Question 2</h1>
			<SideBarNav tests={tests} loadTest={loadTest} currentTest={currentTest} />
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
};

export default SpeakingPart2Presentation;
