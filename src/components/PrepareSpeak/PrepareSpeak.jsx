import CountdownTimer from "@/components/CountdownTimer/CountdownTimer";
import styles from "./PrepareSpeak.module.css";
import TestWrapper from "@/components/TestWrapper/TestWrapper";
import TimeInformation from "@/components/TimeInformation/TimeInformation";
import TimerWrapper from "../TimerWrapper/TimerWrapper";

const PrepareSpeak = ({ question, mode, modeEnum, time, modeTimes }) => {
	return (
		<>
			<TestWrapper>
				<p>{question}</p>
				<TimeInformation modeTimes={modeTimes}></TimeInformation>
			</TestWrapper>
			<TimerWrapper>
				{mode === modeEnum.PREPARE && (
					<span className={styles.instruction}>Prepare your response</span>
				)}
				{mode === modeEnum.SPEAK && (
					<span className={styles.instruction}>Give your response</span>
				)}

				<CountdownTimer time={time} />
			</TimerWrapper>
		</>
	);
};

export default PrepareSpeak;
