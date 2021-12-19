import { memo, useCallback, useState } from 'react';
import { nanoid } from 'nanoid';

import './App.css';
import { useInterval } from './Hooks/CustomHooks';
import Box from './Components/Box';

const initState = {
	title: '',
	body: '',
	verify: false
};

function App() {
	const timer = useInterval(1);
	const [ list, setList ] = useState([]);
	const [ form, setForm ] = useState(initState);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setList([ ...list, { ...form, id: nanoid() } ]);
		setForm(initState);
	};

	const handleVerify = useCallback((id) => {
		const updatedList = list.map((item) => {
			if (item.id === id) return { ...item, verify: !item.verify };
			else return item;
		});
		setList(updatedList);
	}, []);

	
	// const handleVerify = (id) => {
	// 	const updatedList = list.map((item) => {
	// 		if (item.id === id) return { ...item, verify: !item.verify };
	// 		else return item;
	// 	});
	// 	setList(updatedList);
	// };

	return (
		<div className='App'>
			<h1>Counter: {timer}</h1>
			<form>
				<input value={form.title} type='text' name='title' onChange={handleChange} />
				<input value={form.body} type='text' name='body' onChange={handleChange} />
				<button type='submit' onClick={handleSubmit}>
					Submit
				</button>
			</form>
			<div className='list'>
				{list.map((item) => (
					// <Box {...item} />
					<Box {...item} handleVerify={handleVerify} />
					// <Box {...item} />
				))}
			</div>
		</div>
	);
}

export default App;
