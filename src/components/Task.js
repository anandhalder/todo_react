import React, { useContext } from 'react';
import styles from './Task.module.css';
import { TaskListContext } from '../context/TaskListContext';

function Task({ task }) {
	const { removeTask, findItem } = useContext(TaskListContext);

	return (
		<li className={styles.listitem}>
			<span>{task.title}</span>
			<div className={styles.buttons}>
				<button onClick={() => findItem(task.id)}>Edit</button>
				<button onClick={() => removeTask(task.id)}>Delete</button>
			</div>
		</li>
	);
}

export default Task;
