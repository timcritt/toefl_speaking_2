import React, { useEffect, useRef } from "react";
import styles from "./CountdownTimerBar.module.css";

const CountdownTimerBar = ({ currentTime, totalTime }) => {
	const barRef = useRef(null);
	const prevTotalRef = useRef(totalTime);

	useEffect(() => {
		const bar = barRef.current;
		if (!bar) return;

		const percent = Math.max(0, (currentTime / totalTime) * 100);
		const totalChanged = prevTotalRef.current !== totalTime;

		if (totalChanged) {
			// Disable transition
			bar.classList.add(styles.no_transition);

			// Force reflow
			void bar.offsetWidth;

			// Set width instantly
			bar.style.width = `${percent}%`;

			// Re-enable transition after one frame
			requestAnimationFrame(() => {
				bar.classList.remove(styles.no_transition);
			});

			prevTotalRef.current = totalTime;
		} else {
			// Normal animation
			bar.style.width = `${percent}%`;
		}
	}, [currentTime, totalTime]);

	return (
		<div className={styles.timer_bar_container}>
			<div className={styles.timer_bar_outer}>
				<div ref={barRef} className={styles.timer_bar}></div>
			</div>
		</div>
	);
};

export default CountdownTimerBar;
