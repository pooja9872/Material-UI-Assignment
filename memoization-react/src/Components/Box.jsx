import { memo, useMemo } from 'react';


const Box = ({ title, body, id, verify, handleVerify }) => {
// const Box = ({ title, body, id, verify }) => {
	// const color = `rgb(${255 * Math.random()}, ${255 * Math.random()}, ${255 * Math.random()})`;
	const color = useMemo(() => `rgb(${255 * Math.random()}, ${255 * Math.random()}, ${255 * Math.random()})`, [id]);
	console.log("color changed for: ", id);
	return (
		<div key={id} className='Box'>
			<span className='colorBox' style={{ backgroundColor: color }} />
			<h3>{title}</h3>
			<p>{body}</p>
			{/* <input type='checkbox' checked={verify} /> */}
			<input type='checkbox' checked={verify} onClick={() => handleVerify(id)}/>
		</div>
	);
};

export default memo(Box);
// export default Box;	
