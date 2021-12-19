import {  useEffect, useState } from 'react';

export const useInterval = (sec) => {
	const [ timer, setTimer ] = useState(0);
	useEffect(() => {
		const timerId = setInterval(() => {
			setTimer((prev) => prev + 1);
		}, sec * 1000);

		return () => clearInterval(timerId);
	});
	return timer;
};
