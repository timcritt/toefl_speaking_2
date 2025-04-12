import SideNavBar from "../SideNavBar/SideNavBar";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import Read from "../Read/Read";
import Part3ListenContainer from "../Listen/ListenLectureContainer";
import PrepareSpeak from "../PrepareSpeak/PrepareSpeak";
import image from "../../assets/male_professor.png";

const SpeakingPart3Presentation = ({
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
			<h1>Question 3</h1>
			<SideNavBar tests={tests} loadTest={loadTest} currentTest={currentTest} />
			<ToggleSwitch
				mode={mode}
				setMode={setMode}
				modeEnum={modeEnum}
				setTime={setTime}
			/>

			{mode === modeEnum.READ && currentTest && (
				<Read
					title={currentTest.announcement.title}
					body={currentTest.announcement.body}
					author={currentTest.announcement.author}
				/>
			)}
			{mode === modeEnum.LISTEN && currentTest && (
				//Key needed here to force re-render of audio element when new test selected
				<Part3ListenContainer
					key={currentTest.audio}
					audio={currentTest.audio}
					image={image}
					voiceGender={currentTest.voice_gender}
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

export default SpeakingPart3Presentation;
