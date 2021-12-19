import { Button, ButtonGroup, IconButton, ListItem, ListItemText, Modal, Stack, Typography } from '@mui/material';
import { Check, Edit, Delete, Clear } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { changeTodo, deleteTodo } from '../Redux/Todos/action';
import { Box } from '@mui/system';
import { useState } from 'react';

const TodoItem = ({ id, title, status }) => {
	const todos = useSelector((state) => state.todos.todos);
	const [ modal, setModal ] = useState(false);

	const dispatch = useDispatch();

	const handleStatus = (id) => {
		const [ todo ] = todos.filter((item) => item.id === id);
		console.log(todo);
		dispatch(changeTodo({ ...todo, status: !todo.status }));
	};

	const handleDelete = (id) => {
		const filteredTodos = todos.filter((item) => item.id !== id);
		console.log('filteredTodos:', filteredTodos);
		dispatch(deleteTodo(filteredTodos));
	};

	return (
		<ListItem
			secondaryAction={
				<Stack direction='row' spacing={1}>
					<IconButton onClick={() => setModal(true)} edge='end' aria-label='completed'>
						{!status ? <Check /> : <Clear />}
					</IconButton>
					<IconButton onClick={() => handleDelete(id)} edge='end' aria-label='delete'>
						<Delete color='error' />
					</IconButton>
					<IconButton onClick={() => setModal(true)} edge='end' aria-label='edit'>
						<Edit color='warning' />
					</IconButton>
				</Stack>
			}
		>
			<Modal
				sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
				open={modal}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box sx={{ width: 'fit-content', margin: '0 auto' }}>
					<Typography color='white' id='modal-modal-title' variant='h6' component='h2'>
						Do you want to change status of todo: {title}
					</Typography>
					<ButtonGroup sx={{ display: 'flex', justifyContent: 'center' }}>
						<Button
							sx={{ marginRight: '1rem' }}
							onClick={() => {
								handleStatus(id);
								setModal(false);
							}}
							variant='contained'
						>
							Yes
						</Button>
						<Button onClick={() => setModal(false)} variant='contained'>
							No
						</Button>
					</ButtonGroup>
				</Box>
			</Modal>
			<ListItemText sx={status ? { textDecoration: 'line-through' } : {}} primary={title} />
		</ListItem>
	);
};

export default TodoItem;
