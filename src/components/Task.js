import React from 'react';
import styles from './Task.module.css';
// import { TaskListContext } from '../context/TaskListContext';
import { useDispatch } from 'react-redux';
import { deleteTask, updateEditTask } from '../redux';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';

function Task({ task }) {
	// const { removeTask, findItem } = useContext(TaskListContext);
	const dispatch = useDispatch();

	return (
		<li className={styles.listitem}>
			<span>{task.title}</span>
			<div className={styles.buttons}>
				<EditRoundedIcon
					onClick={() => dispatch(updateEditTask(task.id, task.title))}
				/>
				<DeleteForeverRoundedIcon
					onClick={() => dispatch(deleteTask(task.id))}
				/>
			</div>
		</li>
	);
}

export default Task;
