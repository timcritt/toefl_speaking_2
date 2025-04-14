import styles from "./Read.module.css";
import CountdownTimer from "@/components/CountdownTimer/CountdownTimer";
import TestWrapper from "@/components/TestWrapper/TestWrapper";
import TimerWrapper from "../TimerWrapper/TimerWrapper";

const Read = ({ title, body, author }) => {
	return (
		<>
			<TestWrapper>
				<h2>{title}</h2>
				<p>{body}</p>
				{author && (
					<>
						<p>Sincerely,</p>
						<p>{author}</p>
					</>
				)}
			</TestWrapper>

			<TimerWrapper>
				<CountdownTimer time={45000} />
			</TimerWrapper>
		</>
	);
};

export default Read;
