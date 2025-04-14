import SpeakingPart2Presentation from "./SpeakingPart2Presentation";
import usePart from "@/hooks/usePart";

const SpeakingPart2Container = () => {
	//The possible modes for the Speaking Part 2 component
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

	//Fetch tests, handle test selection, handle switching between parts
	const {
		mode,
		setMode,
		tests,
		currentTest,
		setCurrentTest,
		loadTest,
		time,
		setTime,
	} = usePart(modeEnum, modeEnum.READ, "./speaking_part_2.json");

	return (
		<SpeakingPart2Presentation
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

export default SpeakingPart2Container;
