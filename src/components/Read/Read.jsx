import styles from "./Read.module.css";
import CountdownTimer from "@/components/CountdownTimer/CountdownTimer";
import TestWrapper from "@/components/TestWrapper/TestWrapper";

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

			<article className={styles.announcement}>
				<div className={styles.timer_container}>
					<CountdownTimer time={45000} />
				</div>
			</article>
		</>
	);
};

export default Read;
