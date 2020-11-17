import React from 'react';
import styles from './Task.module.css';
// import { TaskListContext } from '../context/TaskListContext';
import { useDispatch } from 'react-redux';
import { deleteTask, updateEditTask } from '../redux';

function Task({ task }) {
	// const { removeTask, findItem } = useContext(TaskListContext);
	const dispatch = useDispatch();

	return (
		<li className={styles.listitem}>
			<span>{task.title}</span>
			<div className={styles.buttons}>
				<button onClick={() => dispatch(updateEditTask(task.id, task.title))}>
					Edit
				</button>
				<button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
			</div>
		</li>
	);
}

export default Task;
