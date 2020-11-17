import React from 'react';
// import { TaskListContext } from '../context/TaskListContext';
import Task from './Task';
import styles from './TaskList.module.css';
import { connect } from 'react-redux';

function TaskList(props) {
	console.log(props.tasks);
	return (
		<div className={styles.tasklist}>
			{/* If tasks is empty  */}
			{props.tasks ? (
				<ul className={styles.task}>
					{props.tasks.map((task) => (
						<Task task={task} key={task.id} />
					))}
				</ul>
			) : (
				<div className={styles.empty__list}>
					<h1>Stop being Lazy !</h1>
				</div>
			)}
		</div>
	);
}

const mapStateToProps = (state) => {
	return { tasks: state.tasks };
};

export default connect(mapStateToProps)(TaskList);
