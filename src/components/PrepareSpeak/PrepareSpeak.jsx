import React, { useState, useRef, useEffect } from "react";
import CountdownContainer from "@/components/CountdownTimer/CountdownContainer";
import styles from "./PrepareSpeak.module.css";
import TestWrapper from "@/components/TestWrapper/TestWrapper";
import TimeInformation from "@/components/TimeInformation/TimeInformation";
import TimerWrapper from "../TimerWrapper/TimerWrapper";
import pauseIcon from "@/assets/icons/pause-button.png";
import playIcon from "@/assets/icons/play-button.png";

const PrepareSpeak = ({
	question,
	question_audio,
	mode,
	modeEnum,
	time,
	modeTimes,
}) => {
	const audioRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(false);

	const handleAudioToggle = () => {
		const audio = audioRef.current;
		if (!audio) return;

		if (audio.paused) {
			audio.play();
		} else {
			audio.pause();
		}
	};
	useEffect(() => {
		const audio = audioRef.current;
		if (!audio) return;

		const handlePlay = () => setIsPlaying(true);
		const handlePause = () => setIsPlaying(false);
		const handleEnded = () => setIsPlaying(false);

		audio.addEventListener("play", handlePlay);
		audio.addEventListener("pause", handlePause);
		audio.addEventListener("ended", handleEnded);

		return () => {
			audio.removeEventListener("play", handlePlay);
			audio.removeEventListener("pause", handlePause);
			audio.removeEventListener("ended", handleEnded);
		};
	}, []);

	// Reset player + UI when new audio is loaded
	useEffect(() => {
		const audio = audioRef.current;
		if (audio) {
			audio.pause();
			audio.currentTime = 0;
		}
		setIsPlaying(false);
	}, [question_audio]);

	return (
		<>
			<TestWrapper>
				{question_audio && <audio ref={audioRef} src={question_audio}></audio>}
				<div className={styles.question_container}>
					<p>Question</p>
					<button className={styles.play_button} onClick={handleAudioToggle}>
						<img
							className={styles.play_button_icon}
							src={isPlaying ? pauseIcon : playIcon}
						/>
					</button>
				</div>
				<p>{question}</p>

				<TimeInformation modeTimes={modeTimes} />
			</TestWrapper>
			<TimerWrapper>
				{mode === modeEnum.PREPARE && (
					<span className={styles.instruction}>Prepare your response</span>
				)}
				{mode === modeEnum.SPEAK && (
					<span className={styles.instruction}>Give your response</span>
				)}
				<CountdownContainer initialTime={time} />
			</TimerWrapper>
		</>
	);
};

export default PrepareSpeak;
