import { useRef, useState, useEffect, useCallback } from "react";

const useCountdownTimer = (durationMs = 10000) => {
	const [currentTime, setCurrentTime] = useState(durationMs);
	const [ticking, setTicking] = useState(false);

	const startTimeRef = useRef(null);
	const elapsedPausedRef = useRef(0);
	const rafRef = useRef(null);

	const progress = 1 - currentTime / durationMs;

	const update = useCallback(() => {
		const now = performance.now();
		const elapsed = now - startTimeRef.current + elapsedPausedRef.current;
		const remaining = Math.max(0, durationMs - elapsed);

		setCurrentTime(remaining);

		if (remaining > 0) {
			rafRef.current = requestAnimationFrame(update);
		} else {
			setTicking(false);
		}
	}, [durationMs]);

	const start = useCallback(() => {
		if (ticking || currentTime <= 0) return;
		startTimeRef.current = performance.now();
		rafRef.current = requestAnimationFrame(update);
		setTicking(true);
	}, [ticking, currentTime, update]);

	const stop = useCallback(() => {
		if (!ticking) return;
		cancelAnimationFrame(rafRef.current);
		const now = performance.now();
		const elapsed = now - startTimeRef.current;
		elapsedPausedRef.current += elapsed;
		setTicking(false);
	}, [ticking]);

	const reset = useCallback(() => {
		cancelAnimationFrame(rafRef.current);
		elapsedPausedRef.current = 0;
		setCurrentTime(durationMs);
		setTicking(false);
	}, [durationMs]);

	useEffect(() => {
		return () => cancelAnimationFrame(rafRef.current);
	}, []);

	return { currentTime, progress, ticking, start, stop, reset };
};

export default useCountdownTimer;
