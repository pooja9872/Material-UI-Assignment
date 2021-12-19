import { useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import axios from 'axios';

import { Box } from '@mui/system';
import Form from '../Components/Form';
import TodoList from '../Components/TodoList';
import { Stack, Typography } from '@mui/material';

// import { getTodoError, getTodoLoading, getTodoSuccess } from '../Redux/Todos/action';
import { Redirect } from 'react-router';

const Home = () => {
	const isAuth = useSelector((state) => state.auth.isAuth);
	const todos = useSelector((state) => state.todos.todos);
	// const dispatch = useDispatch();

	// useEffect(() => {
	// 	dispatch(getTodoLoading());
	// 	axios
	// 		.get('http://localhost:3001/todos')
	// 		.then((res) => {
	// 			dispatch(getTodoSuccess(res.data));
	// 		})
	// 		.catch((err) => dispatch(getTodoError()));
	// }, []);

	if (!isAuth) {
		return <Redirect to='/login' />;
	}

	return (
		<Stack spacing={2} direction='column' justifyContent='center'>
			<Typography textAlign='center' variant='h1' color='primary'>
				Todo App
			</Typography>
			<Form />
			<Box>
				<TodoList list={todos} />
			</Box>
		</Stack>
	);
};

export default Home;
