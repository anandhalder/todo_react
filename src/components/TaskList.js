import React, { useContext } from 'react';
import { TaskListContext } from '../context/TaskListContext';
import Task from './Task';
import styles from './TaskList.module.css';

function TaskList() {
	const { tasks } = useContext(TaskListContext);

	return (
		<div className={styles.tasklist}>
			{tasks.length !== 0 ? (
				<ul className={styles.task}>
					{tasks.map((task) => {
						return <Task task={task} key={task.id} />;
					})}
				</ul>
			) : (
				<div className={styles.empty__list}>
					<h1>Stop being Lazy !</h1>
				</div>
			)}
		</div>
	);
}

export default TaskList;
