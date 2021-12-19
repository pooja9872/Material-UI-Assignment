import { Button, FormControl, Input, Stack } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { loginLoading } from '../Redux/Auth/action';

const LoginPage = ({ handleLogin }) => {
	const [ form, setForm ] = useState({ email: '', password: '' });

	const isAuth = useSelector((state) => state.auth.isAuth);
	const dispatch = useDispatch();

	const handleText = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = () => {
		dispatch(loginLoading());
		handleLogin(form);
	};

	if (isAuth) {
		return <Redirect to='/' />;
	}

	return (
		<Stack direction='row' spacing={2} justifyContent='center'>
			<FormControl>
				<Input
					name='email'
					value={form.email}
					onChange={handleText}
					id='todo-input'
					placeholder='Enter your email'
				/>
			</FormControl>
			<FormControl>
				<Input
					name='password'
					value={form.password}
					onChange={handleText}
					id='todo-input'
					placeholder='Enter your password'
				/>
			</FormControl>
			<Button onClick={handleSubmit} size='small' variant='outlined'>
				Submit
			</Button>
		</Stack>
	);
};

export default LoginPage;
