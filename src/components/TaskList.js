import React from 'react';
// import { TaskListContext } from '../context/TaskListContext';
import Task from './Task';
import styles from './TaskList.module.css';
import { useSelector } from 'react-redux';

function TaskList() {
	// const { tasks } = useContext(TaskListContext);
	const { tasks } = useSelector((state) => state.tasks);

	return (
		<div className={styles.tasklist}>
			{/* If tasks is empty  */}
			{tasks ? (
				<ul className={styles.task}>
					{tasks.map((task) => {
						return <Task task={task.title} key={task.id} />;
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
