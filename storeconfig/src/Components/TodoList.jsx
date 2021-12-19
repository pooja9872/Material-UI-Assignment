import { List } from '@mui/material';
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ list }) => {
	return (
		<List>
			{list.map((item) => {
				return <TodoItem key={item.id} {...item} />;
			})}
		</List>
	);
};

export default TodoList;
