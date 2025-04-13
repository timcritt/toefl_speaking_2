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
						/>
						<Read
							title={currentTest.announcement.title}
							body={currentTest.announcement.body}
							author={currentTest.announcement.author}
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
						/>
						<Listen
							key={currentTest.audio}
							audio={currentTest.audio}
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
						/>
						<PrepareSpeak
							question={currentTest.question}
							mode={mode}
							time={time}
							modeEnum={modeEnum}
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
