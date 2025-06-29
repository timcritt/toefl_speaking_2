import SpeakingPart3Presentation from "./SpeakingPart3Presentation";
import usePart from "@/hooks/usePart";
import {
	getSpeakingTaskThreeById,
	getSpeakingTaskThreeSummaries,
} from "../../api/tasks/tasksAPI";

const SpeakingPart3Container = () => {
	//The possible modes for the Speaking Part 3 component
	const modeEnum = Object.freeze({
		READ: "READ",
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
		modeEnum.READ,
		getSpeakingTaskThreeSummaries,
		getSpeakingTaskThreeById
	);

	return (
		<SpeakingPart3Presentation
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

export default SpeakingPart3Container;
