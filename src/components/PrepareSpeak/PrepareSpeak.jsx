import CountdownTimer from "../CountdownTimer/CountdownTimer";
import styles from "./PrepareSpeak.module.css";

const PrepareSpeak = ({ question, mode, modeEnum, time }) => {
	return (
		<>
			<article className={styles.announcement}>
				<p>{question}</p>
			</article>
			<section className={styles.announcement}>
				{mode === modeEnum.PREPARE && (
					<span className={styles.instruction}>Prepare your response</span>
				)}
				{mode === modeEnum.SPEAK && (
					<span className={styles.instruction}>Give your response</span>
				)}
				<div className={styles.timer_container}>
					<CountdownTimer time={time} />
				</div>
			</section>
		</>
	);
};

export default PrepareSpeak;
