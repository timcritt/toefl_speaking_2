import styles from "./ToggleSwitch.module.css";

const ToggleSwitch = ({ mode, modeEnum, setMode, setTime }) => {
	return (
		<div className={styles.toggle_group}>
			<input
				type="radio"
				name="mode"
				id="read"
				value="read"
				checked={mode === modeEnum.READ}
				onChange={() => setMode(modeEnum.READ)}
			/>
			<label htmlFor="read">Read</label>

			<input
				type="radio"
				name="mode"
				id="listen"
				value="listen"
				checked={mode === modeEnum.LISTEN}
				onChange={() => setMode(modeEnum.LISTEN)}
			/>
			<label htmlFor="listen">Listen</label>
			<input
				type="radio"
				name="mode"
				id="prepare"
				value="preare"
				checked={mode === modeEnum.PREPARE}
				onChange={() => {
					setTime(30000);
					setMode(modeEnum.PREPARE);
				}}
			/>
			<label htmlFor="prepare">Prepare</label>
			<input
				type="radio"
				name="mode"
				id="speak"
				value="speak"
				checked={mode === modeEnum.SPEAK}
				onChange={() => {
					setMode(modeEnum.SPEAK);
					setTime(60000);
				}}
			/>
			<label htmlFor="speak">Speak</label>
		</div>
	);
};

export default ToggleSwitch;
