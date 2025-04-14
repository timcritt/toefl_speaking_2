import styles from "./TimeInformation.module.css";

const TimeInformation = ({ modeTimes }) => {
	return (
		<section className={styles.container}>
			<p className={styles.time_instructions}>
				Preparation Time: {modeTimes.PREPARE} seconds
			</p>
			<p className={styles.time_instructions}>
				Record Time: {modeTimes.SPEAK} seconds
			</p>
		</section>
	);
};
export default TimeInformation;
