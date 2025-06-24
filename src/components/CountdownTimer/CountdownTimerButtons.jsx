import React from "react";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import StopOutlinedIcon from "@mui/icons-material/StopOutlined";
import RotateLeftOutlinedIcon from "@mui/icons-material/RotateLeftOutlined";

import styles from "./CountdownTimerButtons.module.css";

const CountdownTimerButtons = ({ ticking, onStartStop, onReset, disabled }) => {
	return (
		<div className={styles.button_container}>
			<button
				className={`${styles.btn} ${ticking ? styles.stop : styles.start}`}
				onClick={onStartStop}
				disabled={disabled}
			>
				{ticking ? <StopOutlinedIcon /> : <PlayArrowOutlinedIcon />}
			</button>

			<button className={`${styles.btn} ${styles.reset}`} onClick={onReset}>
				<RotateLeftOutlinedIcon />
			</button>
		</div>
	);
};

export default CountdownTimerButtons;
