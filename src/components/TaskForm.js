import React, { useContext, useState, useEffect } from 'react';
import styles from './TaskForm.module.css';
import { TaskListContext } from '../context/TaskListContext';

function TaskForm() {
	const { addTask, clearList, editItem, editTask } = useContext(
		TaskListContext
	);
	const [title, setTitle] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		if (editItem !== null) {
			editTask(title, editItem.id);
		} else {
			addTask(title);
		}
		setTitle('');
	};

	const handleClear = (event) => {
		event.preventDefault();
		clearList();
	};

	useEffect(() => {
		if (editItem !== null) {
			setTitle(editItem.title);
		} else {
			setTitle('');
		}
	}, [editItem]);

	return (
		<form onSubmit={handleSubmit} className={styles.task__form}>
			<input
				onChange={(event) => setTitle(event.target.value)}
				value={title}
				autoFocus
				className={styles.task__input}
				type='text'
				placeholder='Task'
				required
			/>
			<div className={styles.task__buttons}>
				<button type='submit'>{editItem ? 'Edit Task' : 'Add Task'}</button>
				<button type='submit' onClick={handleClear}>
					Clear
				</button>
			</div>
		</form>
	);
}

export default TaskForm;
