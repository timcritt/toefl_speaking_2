import SideNavBar from "@/components/SideNavBar/SideNavBar";
import ToggleSwitch from "@/components/ToggleSwitch/ToggleSwitch";
import Read from "@/components/Read/Read";
import Listen from "@/components/Listen/ListenPresentation";
import PrepareSpeak from "@/components/PrepareSpeak/PrepareSpeak";
import image from "@/assets/question_two_1.png";

import styles from "./SpeakingPart2.module.css";

const SpeakingPart2Presentation = ({
	tests,
	loadTest,
	currentTest,
	mode,
	setTime,
	setMode,
	modeEnum,
	time,
	modeTimes,
}) => {
	const renderContent = () => {
		if (!currentTest)
			return <h2 className={styles.no_test}>Select a question</h2>;

		switch (mode) {
			case modeEnum.READ:
				return (
					<>
						<ToggleSwitch
							mode={mode}
							setMode={setMode}
							modeEnum={modeEnum}
							setTime={setTime}
							modeTimeEnum={modeTimes}
						/>
						<Read
							title={currentTest.reading_title}
							body={currentTest.reading_body}
							author={currentTest.author}
						/>
					</>
				);

			case modeEnum.LISTEN:
				return (
					<>
						<ToggleSwitch
							mode={mode}
							setMode={setMode}
							modeEnum={modeEnum}
							setTime={setTime}
							modeTimeEnum={modeTimes}
						/>
						<Listen
							key={currentTest.listening_audio}
							audio={currentTest.listening_audio}
							image={image}
						/>
					</>
				);

			case modeEnum.PREPARE:
			case modeEnum.SPEAK:
				return (
					<>
						<ToggleSwitch
							mode={mode}
							setMode={setMode}
							modeEnum={modeEnum}
							setTime={setTime}
							modeTimeEnum={modeTimes}
						/>
						<PrepareSpeak
							question_audio={currentTest.question_audio}
							question={currentTest.question_text}
							mode={mode}
							time={time}
							modeEnum={modeEnum}
							modeTimes={modeTimes}
						/>
					</>
				);

			default:
				return null;
		}
	};

	return (
		<article className={styles.container}>
			<SideNavBar
				navTitle={"Question 2"}
				tests={tests}
				loadTest={loadTest}
				currentTest={currentTest}
			/>

			<div>{renderContent()}</div>
		</article>
	);
};

export default SpeakingPart2Presentation;
