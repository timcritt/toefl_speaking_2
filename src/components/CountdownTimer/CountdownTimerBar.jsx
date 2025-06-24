import React from "react";
import styles from "./CountdownTimerBar.module.css";

const CountdownTimerBar = ({ currentTime, totalTime }) => {
	const percentage = Math.max(0, (currentTime / totalTime) * 100);

	return (
		<div className={styles.timer_bar_container}>
			<div className={styles.timer_bar_outer}>
				<div
					className={styles.timer_bar}
					style={{ width: `${percentage}%` }}
				></div>
			</div>
		</div>
	);
};

export default CountdownTimerBar;
