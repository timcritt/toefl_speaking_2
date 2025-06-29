import SpeakingPart4Presentation from "./SpeakingPart4Presentation";
import usePart from "@/hooks/usePart";
import {
	getSpeakingTaskFourById,
	getSpeakingTaskFourSummaries,
} from "../../api/tasks/tasksAPI";

const SpeakingPart4Container = () => {
	//The possible modes for the Speaking Part 3 component
	const modeEnum = Object.freeze({
		LISTEN: "LISTEN",
		PREPARE: "PREPARE",
		SPEAK: "SPEAK",
	});
	const modeTimes = {
		[modeEnum.PREPARE]: 30,
		[modeEnum.SPEAK]: 60,
	};

	//Speaking part 3 mode is set to READ by default
	const {
		mode,
		setMode,
		tests,
		currentTest,
		setCurrentTest,
		loadTest,
		time,
		setTime,
	} = usePart(
		modeEnum,
		modeEnum.LISTEN,
		getSpeakingTaskFourSummaries,
		getSpeakingTaskFourById
	);

	return (
		<SpeakingPart4Presentation
			mode={mode}
			setMode={setMode}
			modeEnum={modeEnum}
			currentTest={currentTest}
			setCurrentTest={setCurrentTest}
			tests={tests}
			loadTest={loadTest}
			time={time}
			setTime={setTime}
			modeTimes={modeTimes}
		/>
	);
};

export default SpeakingPart4Container;
