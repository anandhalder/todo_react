import React from 'react';
import styles from './App.module.css';
import TaskList from './components/TaskList';
import TaskListContextProvider from './context/TaskListContext';
import TaskForm from './components/TaskForm';
import Header from './components/Header';

function App() {
	return (
		<TaskListContextProvider>
			<div className={styles.container}>
				<div className={styles.app__wrapper}>
					<Header />
					<TaskForm />
					<TaskList />
				</div>
				<div className={styles.min__size}>
					<h2>I don't work on Iphone 4!</h2>
				</div>
			</div>
		</TaskListContextProvider>
	);
}

export default App;
