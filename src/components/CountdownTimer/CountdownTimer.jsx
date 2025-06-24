import React, {
	useState,
	useRef,
	useEffect,
	forwardRef,
	useImperativeHandle,
} from "react";

const CountdownTimer = forwardRef(({ time }, ref) => {
	const [currentTime, setCurrentTime] = useState(time);
	const [ticking, setTicking] = useState(false);
	const intervalRef = useRef(null);

	// Reset on time prop change
	useEffect(() => {
		reset();
	}, [time]);

	// Expose controls to parent
	useImperativeHandle(ref, () => ({
		start,
		stop,
		reset,
		getTicking: () => ticking,
		getCurrentTime: () => currentTime,
	}));

	function start() {
		if (currentTime > 0 && !ticking) {
			setTicking(true);
		}
	}

	function stop() {
		setTicking(false);
	}

	function reset() {
		setTicking(false);
		setCurrentTime(time);
		clearInterval(intervalRef.current);
	}

	useEffect(() => {
		if (ticking) {
			intervalRef.current = setInterval(() => {
				setCurrentTime((prev) => {
					if (prev <= 100) {
						stop();
						return 0;
					}
					return prev - 100;
				});
			}, 100);
		} else {
			clearInterval(intervalRef.current);
		}
		return () => clearInterval(intervalRef.current);
	}, [ticking]);

	return null; // This component has no UI — it's just logic.
});

export default CountdownTimer;
