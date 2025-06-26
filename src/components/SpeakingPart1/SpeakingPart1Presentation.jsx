import SideNavBarWrapper from "@/components/SideNavBar/SideNavBarWrapper";
import ToggleSwitch from "@/components/ToggleSwitch/ToggleSwitch";
import TestWrapper from "@/components/TestWrapper/TestWrapper";
import TimeInformation from "@/components/TimeInformation/TimeInformation";
import Tag from "@/components/Tag/Tag";
import styles from "./SpeakingPart1.module.css";
import TimerWrapper from "@/components/TimerWrapper/TimerWrapper";
import CountdownContainer from "@/components/CountdownTimer/CountdownContainer";
import PrepareSpeak from "../PrepareSpeak/PrepareSpeak";

const SpeakingPart1Presentation = ({
	topics,
	question,
	mode,
	setMode,
	modeEnum,
	modeTimeEnum,
	time,
	setTime,
	handleTopicChange,
	currentTopic,
}) => {
	return (
		<>
			<SideNavBarWrapper>
				<aside className={styles.tags_container}>
					<p className={styles.instruction}>Random question by topic</p>
					{topics.map((topic) => (
						<Tag
							key={topic}
							tagName={topic}
							handleSetTag={handleTopicChange}
							selected={currentTopic === topic}
						/>
					))}
				</aside>
			</SideNavBarWrapper>
			<ToggleSwitch
				mode={mode}
				setMode={setMode}
				modeEnum={modeEnum}
				setTime={setTime}
				modeTimeEnum={modeTimeEnum}
			/>
			{/* Can't use the prepare speak in its current form as questions for part 1 are sometimes rendered with choices */}
			{/* <PrepareSpeak
				question={question.question}
				question_audio={null}
				mode={mode}
				setMode={setMode}
				modeEnum={modeEnum}
				time={time}
				modeTimes={modeTimeEnum}
			></PrepareSpeak> */}
			<TestWrapper>
				{question && (
					<div>
						<p>{question.question}</p>
						{question.choices && (
							<ul className={styles.choices}>
								{question.choices.map((choice, index) => (
									<li key={index} className={styles.option}>
										{choice}
									</li>
								))}
							</ul>
						)}
					</div>
				)}
				<hr />
				<TimeInformation modeTimes={modeTimeEnum} />
			</TestWrapper>
			<TimerWrapper>
				<CountdownContainer initialTime={time} />
			</TimerWrapper>
		</>
	);
};

export default SpeakingPart1Presentation;
