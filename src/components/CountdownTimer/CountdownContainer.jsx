import React, { useRef, useState, useEffect } from "react";
import CountdownTimer from "./CountdownTimer";
import CountdownTimerButtons from "./CountdownTimerButtons";
import CountdownTimerBar from "./CountdownTimerBar";

import styles from "./CountdownContainer.module.css";

const CountdownContainer = ({ initialTime }) => {
	const timerRef = useRef(null);
	const [currentTime, setCurrentTime] = useState(initialTime);
	const [ticking, setTicking] = useState(false);

	// Poll timer state so UI stays in sync
	useEffect(() => {
		const interval = setInterval(() => {
			if (timerRef.current) {
				setCurrentTime(timerRef.current.getCurrentTime());
				setTicking(timerRef.current.getTicking());
			}
		}, 100);
		return () => clearInterval(interval);
	}, []);

	const formatTime = (ms) => {
		const totalSeconds = Math.round(ms / 1000);
		const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
		const seconds = String(totalSeconds % 60).padStart(2, "0");
		return `${minutes}:${seconds}`;
	};

	return (
		<div className={styles.container}>
			<h2 className={styles.time_display}>
				{currentTime > 0 ? formatTime(currentTime) : "Time Up!"}
			</h2>

			{/* Timer logic only */}
			<CountdownTimer ref={timerRef} time={initialTime} />

			{/* Progress bar */}
			<CountdownTimerBar currentTime={currentTime} totalTime={initialTime} />

			{/* Control buttons */}
			<CountdownTimerButtons
				ticking={ticking}
				onStartStop={() => {
					if (ticking) {
						timerRef.current.stop();
					} else {
						timerRef.current.start();
					}
				}}
				onReset={() => timerRef.current.reset()}
				disabled={currentTime === 0}
			/>
		</div>
	);
};

export default CountdownContainer;
