import SideNavBar from "@/components/SideNavBar/SideNavBar";
import ToggleSwitch from "@/components/ToggleSwitch/ToggleSwitch";
import Read from "@/components/Read/Read";
import Part3ListenContainer from "@/components/Listen/ListenLectureContainer";
import PrepareSpeak from "@/components/PrepareSpeak/PrepareSpeak";
import image from "@/assets/male_professor.png";

const SpeakingPart3Presentation = ({
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
	return (
		<>
			<SideNavBar tests={tests} loadTest={loadTest} currentTest={currentTest} />
			<ToggleSwitch
				mode={mode}
				setMode={setMode}
				modeEnum={modeEnum}
				setTime={setTime}
				modeTimeEnum={modeTimes}
			/>

			{mode === modeEnum.READ && currentTest && (
				<Read
					title={currentTest.reading_title}
					body={currentTest.reading_body}
					author={currentTest.author}
				/>
			)}
			{mode === modeEnum.LISTEN && currentTest && (
				//Key needed here to force re-render of audio element when new test selected
				<Part3ListenContainer
					key={currentTest.listening_audio}
					audio={currentTest.listening_audio}
					image={image}
					voiceGender={currentTest.voice_gender}
				/>
			)}
			{(mode === modeEnum.PREPARE || mode === modeEnum.SPEAK) &&
				currentTest && (
					<PrepareSpeak
						question={currentTest.question_text}
						mode={mode}
						time={time}
						modeEnum={modeEnum}
						modeTimes={modeTimes}
					/>
				)}
		</>
	);
};

export default SpeakingPart3Presentation;
