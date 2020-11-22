import { useRef, useEffect } from 'react';
import Task from "src/models/Task";

const useUnload = (activeTask: Task, fn: any) => {
	const cb = useRef(fn);

	useEffect(() => {
		cb.current = fn;
	}, [fn]);

	useEffect(() => {
		const onUnload = cb.current;
		if (activeTask.id) {
			window.addEventListener("beforeunload", onUnload);
		}
		return () => window.removeEventListener("beforeunload", onUnload);

	}, [activeTask]);
};

export default useUnload;