import React from "react";
import styles from "./ToggleSwitch.module.css";

const ToggleSwitch = ({ mode, modeEnum, setMode, setTime }) => {
	return (
		<div className={styles.toggle_group}>
			{Object.entries(modeEnum).map(([key, value]) => {
				const id = key.toLowerCase();

				const handleChange = () => {
					// Set time conditionally for specific modes
					if (value === modeEnum.PREPARE) {
						setTime(30000);
					} else if (value === modeEnum.SPEAK) {
						setTime(60000);
					}
					setMode(value);
				};

				return (
					<React.Fragment key={value}>
						<input
							type="radio"
							name="mode"
							id={id}
							value={id}
							checked={mode === value}
							onChange={handleChange}
						/>
						<label htmlFor={id}>
							{key.charAt(0) + key.slice(1).toLowerCase()}
						</label>
					</React.Fragment>
				);
			})}
		</div>
	);
};

export default ToggleSwitch;
