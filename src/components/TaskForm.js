import React, { useState, useEffect } from 'react';
import styles from './TaskForm.module.css';
import { connect } from 'react-redux';
import { addTask, editTask, clearTask, updateEditTask } from '../redux';

function TaskForm(props) {
	const [title, setTitle] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		if (props.editItem.id !== '') {
			// Traversing through Array to get the position of the Element to Edit !
			let count = 0;
			for (let i = 0; i < props.tasks.length; i++) {
				if (props.tasks[i].id === props.editItem.id) {
					break;
				}
				// console.log('Inside For Loop !', count);
				count += 1;
			}
			// console.log('Target Element Position', count);
			props.editTask(props.editItem, title, count);
			props.updateEditTask('', '');
		} else {
			// Checking if the task is already Exist or not in the database / Store !
			if (
				props.tasks.filter((t) => t.title.toLowerCase() === title.toLowerCase())
					.length !== 1
			) {
				// Calling Function defined in the mapDispatchToProps !
				props.addTask(title);
			} else {
				alert('Task is Already Added !');
			}
		}
		setTitle('');
	};

	const handleClear = (event) => {
		event.preventDefault();
		// MapDispatchToProps function !
		props.clearTask();
	};

	useEffect(() => {
		if (props.editItem.id !== '') {
			setTitle(props.editItem.title);
		} else {
			setTitle('');
		}
	}, [props.editItem.id]);

	return (
		<form onSubmit={handleSubmit} className={styles.task__form}>
			<input
				autoFocus
				onChange={(event) => setTitle(event.target.value)}
				value={title}
				className={styles.task__input}
				type='text'
				placeholder='Add Task !'
				required
			/>
			<div className={styles.task__buttons}>
				<button type='submit'>
					{props.editItem.id !== '' ? 'Edit Task' : 'Add Task'}
				</button>
				<button type='submit' onClick={handleClear}>
					Clear
				</button>
			</div>
		</form>
	);
}

const mapDispatchToProps = (dispatch) => {
	return {
		addTask: (title) => dispatch(addTask(title)),
		editTask: (taskId, title, pos) => dispatch(editTask(taskId, title, pos)),
		clearTask: () => dispatch(clearTask()),
		updateEditTask: (id, title) => dispatch(updateEditTask(id, title)),
	};
};

const mapStateToProps = (state) => {
	return { editItem: state.editItem, tasks: state.tasks };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
