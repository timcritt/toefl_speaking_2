import React, {
	useImperativeHandle,
	forwardRef,
	useRef,
	useEffect,
} from "react";

const CountdownTimer = forwardRef(({ time }, ref) => {
	const intervalRef = useRef(null);
	const initialTimeRef = useRef(time);
	const currentTimeRef = useRef(time);
	const tickingRef = useRef(false);

	useImperativeHandle(ref, () => ({
		start() {
			if (tickingRef.current) return;
			tickingRef.current = true;
			intervalRef.current = setInterval(() => {
				currentTimeRef.current = Math.max(0, currentTimeRef.current - 100);
				if (currentTimeRef.current === 0) {
					clearInterval(intervalRef.current);
					tickingRef.current = false;
				}
			}, 100);
		},

		stop() {
			clearInterval(intervalRef.current);
			intervalRef.current = null;
			tickingRef.current = false;
		},

		reset() {
			this.stop();
			currentTimeRef.current = initialTimeRef.current;
		},

		setTime(newTime) {
			this.stop();
			initialTimeRef.current = newTime;
			currentTimeRef.current = newTime;
		},

		getCurrentTime() {
			return currentTimeRef.current;
		},

		getTicking() {
			return tickingRef.current;
		},

		getInitialTime() {
			return initialTimeRef.current;
		},
	}));

	useEffect(() => {
		initialTimeRef.current = time;
		currentTimeRef.current = time;
	}, [time]);

	return null;
});

export default CountdownTimer;
