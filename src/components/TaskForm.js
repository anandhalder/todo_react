import React, { useState, useEffect } from 'react';
import styles from './TaskForm.module.css';
// import { TaskListContext } from '../context/TaskListContext';
import { connect } from 'react-redux';
import { addTask, editTask, clearTask } from '../redux';

function TaskForm(props) {
	// const { addTask, clearList, editItem, editTask } = useContext(
	// 	TaskListContext
	// );
	const [title, setTitle] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		if (props.editItem !== '') {
			// editTask(title, editItem.id);
			props.editTask(props.editItem, title);
		} else {
			// addTask(title);
			// Calling Function defined in the mapDispatchToProps !

			props.addTask(title);
		}
		setTitle('');
	};

	const handleClear = (event) => {
		event.preventDefault();
		// MapDispatchToProps function !
		props.clearTask();
	};

	useEffect(() => {
		if (props.editItem !== null) {
			setTitle(title);
		} else {
			setTitle('');
		}
	}, [props.editItem]);

	return (
		<form onSubmit={handleSubmit} className={styles.task__form}>
			<input
				autoFocus
				onChange={(event) => setTitle(event.target.value)}
				value={title}
				className={styles.task__input}
				type='text'
				placeholder={props.editItem ? 'Edit Task' : 'Add Task'}
				required
			/>
			<div className={styles.task__buttons}>
				<button type='submit'>
					{props.editItem ? 'Edit Task' : 'Add Task'}
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
		editTask: (taskId, title) => dispatch(editTask(taskId, title)),
		clearTask: () => dispatch(clearTask()),
	};
};

const mapStateToProps = (state) => {
	return { editItem: state.editItem };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
