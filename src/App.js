export default function App() {
	return (
		<>
			<Header />
			<AddTask />
			<ListTasks />
		</>
	);
}

function Header() {
	return <h1 className='heading'>Todo List</h1>;
}

function AddTask() {
	return (
		<form className='form-add-task'>
			<input type='text' placeholder='Add task...' />
			<Button>Add</Button>
		</form>
	);
}

function ListTasks() {
	return (
		<ul className='tasks-list'>
			<Task />
			<Task />
			<Task />
			<Task />
		</ul>
	);
}

function Task() {
	return (
		<li className='task'>
			<label>
				<input type='checkbox' />
				<span>Task</span>
			</label>
			<span className='delete-btn'>✖</span>
		</li>
	);
}

function Button({ children }) {
	return <button className='btn'>{children}</button>;
}
