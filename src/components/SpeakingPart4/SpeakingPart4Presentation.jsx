import SideNavBar from "../SideNavBar/SideNavBar";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import Read from "../Read/Read";
import Listen from "../Listen/Listen";
import PrepareSpeak from "../PrepareSpeak/PrepareSpeak";
import image from "../../assets/question_three_male.png";

const SpeakingPart4Presentation = ({
	tests,
	loadTest,
	currentTest,
	mode,
	setTime,
	setMode,
	modeEnum,
	time,
}) => {
	return (
		<>
			<h1>Question 4</h1>
			<SideNavBar tests={tests} loadTest={loadTest} currentTest={currentTest} />
			<ToggleSwitch
				mode={mode}
				setMode={setMode}
				modeEnum={modeEnum}
				setTime={setTime}
			/>

			{mode === modeEnum.LISTEN && currentTest && (
				//Key needed here to force re-render of audio element when new test selected
				<Listen
					key={currentTest.audio}
					audio={currentTest.audio}
					image={image}
				/>
			)}
			{(mode === modeEnum.PREPARE || mode === modeEnum.SPEAK) &&
				currentTest && (
					<PrepareSpeak
						question={currentTest.question}
						mode={mode}
						time={time}
						modeEnum={modeEnum}
					/>
				)}
		</>
	);
};

export default SpeakingPart4Presentation;
