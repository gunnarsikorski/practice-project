import React from 'react';
import Card from '../UI/Card'
import classes from './UsersList.module.css'

const UsersList = (props) => {
	return (
		<Card className={classes.users}>
			<h1>Users:</h1>
			<ul>
				{props.users.map((user) => (
					<li key={user.id}>
						{user.name} ({user.age} yrs old) - {user.position}
					</li>
				))}
			</ul>
		</Card>
	);
};

export default UsersList;
