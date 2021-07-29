import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
	const [usersList, setUsersList] = useState([]);

	const addUserHandler = (u, a, p) => {
		setUsersList((prevUsersList) => {
			return [
				...prevUsersList,
				{ name: u, age: a, position: p, id: Math.random().toString() },
			];
		});
	};

	return (
		<>
			<AddUser onAddUser={addUserHandler} />
			<UsersList users={usersList} />
		</>
	);
}

export default App;
