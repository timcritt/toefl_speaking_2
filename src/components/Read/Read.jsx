import styles from "./Read.module.css";
import CountdownTimer from "../CountdownTimer/CountdownTimer";

const Read = ({ title, body, author }) => {
	return (
		<>
			<article className={styles.announcement}>
				<h2>{title}</h2>
				<p>{body}</p>
				{author && (
					<>
						<p>Sincerely,</p>
						<p>{author}</p>
					</>
				)}
			</article>

			<article className={styles.announcement}>
				<div className={styles.timer_container}>
					<CountdownTimer time={45000} />
				</div>
			</article>
		</>
	);
};

export default Read;
