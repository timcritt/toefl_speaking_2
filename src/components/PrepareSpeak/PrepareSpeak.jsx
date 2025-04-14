import CountdownTimer from "@/components/CountdownTimer/CountdownTimer";
import styles from "./PrepareSpeak.module.css";
import TestWrapper from "@/components/TestWrapper/TestWrapper";
import TimeInformation from "@/components/TimeInformation/TimeInformation";

const PrepareSpeak = ({ question, mode, modeEnum, time, modeTimes }) => {
	return (
		<>
			<TestWrapper>
				<p>{question}</p>
				<TimeInformation modeTimes={modeTimes}></TimeInformation>
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
