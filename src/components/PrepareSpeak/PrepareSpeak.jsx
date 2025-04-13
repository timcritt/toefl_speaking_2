import CountdownTimer from "@/components/CountdownTimer/CountdownTimer";
import styles from "./PrepareSpeak.module.css";
import TestWrapper from "@/components/TestWrapper/TestWrapper";

const PrepareSpeak = ({ question, mode, modeEnum, time }) => {
	return (
		<>
			<TestWrapper>
				<p>{question}</p>
			</TestWrapper>
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
