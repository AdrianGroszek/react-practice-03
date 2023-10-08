import { useState } from 'react';

export default function App() {
	const [inputTask, setInputTask] = useState('');
	const [tasksList, setTasksList] = useState([]);

	function handleAddTask(e) {
		e.preventDefault();

		if (!inputTask) return;

		setTasksList((tasks) => [
			...tasks,
			{ id: Date.now(), inputTask, isDone: false },
		]);

		setInputTask('');
	}

	function handleDeleteTask(id) {
		setTasksList((tasks) => tasks.filter((task) => task.id !== id));
	}

	function handleToggleTask(id) {
		setTasksList((tasks) =>
			tasks.map((task) =>
				task.id === id ? { ...task, isDone: !task.isDone } : task
			)
		);
	}

	return (
		<>
			<Header />
			<AddTask
				inputTask={inputTask}
				onAddTask={handleAddTask}
				setInputTask={setInputTask}
			/>
			{tasksList.length === 0 ? (
				<h3 className='no-tasks-text'>Add your tasks</h3>
			) : (
				<ListTasks
					tasksList={tasksList}
					onDeleteTask={handleDeleteTask}
					onToggleTask={handleToggleTask}
				/>
			)}
		</>
	);
}

function Header() {
	return <h1 className='heading'>Todo List</h1>;
}

function AddTask({ inputTask, onAddTask, setInputTask }) {
	return (
		<form className='form-add-task' onSubmit={onAddTask}>
			<input
				type='text'
				placeholder='Add task...'
				value={inputTask}
				onChange={(e) => setInputTask(e.target.value)}
			/>
			<Button>Add</Button>
		</form>
	);
}

function ListTasks({ tasksList, onDeleteTask, onToggleTask }) {
	return (
		<ul className='tasks-list'>
			{tasksList.map((task) => (
				<Task
					task={task}
					onDeleteTask={onDeleteTask}
					onToggleTask={onToggleTask}
					key={task.id}
				/>
			))}
		</ul>
	);
}

function Task({ task, onDeleteTask, onToggleTask }) {
	return (
		<li className='task'>
			<label>
				<input
					type='checkbox'
					checked={task.isDone}
					onChange={() => onToggleTask(task.id)}
					style={task.isDone ? { accentColor: '#ff6d00' } : {}}
				/>
				<span className={task.isDone ? 'is-done' : ''}>{task.inputTask}</span>
			</label>
			<span className='delete-btn' onClick={() => onDeleteTask(task.id)}>
				✖
			</span>
		</li>
	);
}

function Button({ children }) {
	return <button className='btn'>{children}</button>;
}
