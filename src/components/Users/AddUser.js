import React, { useState, useRef } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
	const nameInputRef = useRef();
	const ageInputRef = useRef();

	// const [enteredUsername, setEnteredUsername] = useState('');
	// const [enteredAge, setEnteredAge] = useState('');
	const [error, setError] = useState();

	const addUserHandler = (event) => {
		event.preventDefault();
		const enteredName = nameInputRef.current.value
		const enteredUserAge = ageInputRef.current.value
		if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
			setError({
				title: 'Invalid Input',
				message: 'Please enter a valid name and age',
			});
			return;
		} // trim removes any whitespace
		if (+enteredUserAge < 1) {
			setError({
				title: 'Invalid Age',
				message: 'Please enter a valid age',
			});
			return;
		} // + before a variable forces it to be read as a number not a string
		props.onAddUser(enteredName, enteredUserAge);
		nameInputRef.current.value = ''
		ageInputRef.current.value = ''
		// setEnteredUsername('');
		// setEnteredAge('');
	};

	// const usernameChangeHandler = (event) => {
	// 	setEnteredUsername(event.target.value);
	// };
	// const ageChangeHandler = (event) => {
	// 	setEnteredAge(event.target.value);
	// };

	const errorHandler = () => {
		setError(null);
        // setEnteredUsername('');
		// setEnteredAge('');
	};

	return (
		<>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirm={errorHandler}
				/>
			)}
			<Card className={classes.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor='username'>Username</label>
					<input
						id='username'
						type='text'
						// value={enteredUsername}
						// onChange={usernameChangeHandler}
						ref={nameInputRef}
					/>
					<label htmlFor='age'>Age (Years)</label>
					<input
						id='age'
						type='number'
						// value={enteredAge}
						// onChange={ageChangeHandler}
						ref={ageInputRef}
					/>
					<Button type='submit'>Add User</Button>
				</form>
			</Card>
		</>
	);
};

export default AddUser;

// Commented code is all the state I had before implementing Refs on this component