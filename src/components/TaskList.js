import React, { useContext } from 'react';
import { TaskListContext } from '../context/TaskListContext';
import Task from './Task';
import styles from './TaskList.module.css';

function TaskList() {
	const { tasks } = useContext(TaskListContext);

	return (
		<div className={styles.tasklist}>
			
			<ul className={styles.task}>
				{tasks.map((task) => {
					return <Task task={task} key={task.id} />;
				})}
			</ul>
		</div>
	);
}

export default TaskList;
