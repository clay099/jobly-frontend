import React, { useState, useEffect } from "react";
import JoblyApi from "./JoblyApi";
import { Button, Form, Input, FormGroup, Label, Alert } from "reactstrap";
import useFields from "./hooks/useFields";
import { useHistory } from "react-router-dom";

const UpdateProfileForm = () => {
	const [alertMessage, setAlertMessage] = useState("");
	const [successMessage, setSuccessMessage] = useState("");

	const initialstate = {};
	const [formData, handleChange, resetForm, setFormData] = useFields(
		initialstate
	);

	const history = useHistory();

	const [userDetails, setUserDetails] = useState(initialstate);
	useEffect(() => {
		async function getAllUserDetails(username) {
			let details = await JoblyApi.getUserData(username);
			setUserDetails({ ...details });
			setFormData({ ...details });
			console.log("details", details);
		}
		const username = localStorage.getItem("username");
		getAllUserDetails(username);
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await JoblyApi.updateUserData(formData);

			setSuccessMessage("User updated successfully.");
			setFormData(initialstate);
		} catch (e) {
			setAlertMessage(e);
		}

		resetForm();
	};

	if (userDetails === initialstate) {
		return <p>update form</p>;
	}

	return (
		<Form className="UpdateProfileForm" onSubmit={handleSubmit}>
			<FormGroup>
				<Label for="username">Username</Label>
				<Input
					plaintext
					type="text"
					name="username"
					id="username"
					value={formData.username}
				/>
			</FormGroup>
			<FormGroup>
				<Label for="first_name">First Name</Label>
				<Input
					type="text"
					name="first_name"
					id="first_name"
					onChange={handleChange}
					value={formData.first_name}
				/>
			</FormGroup>
			<FormGroup>
				<Label for="last_name">Last Name</Label>
				<Input
					type="text"
					name="last_name"
					id="last_name"
					onChange={handleChange}
					value={formData.last_name}
				/>
			</FormGroup>
			<FormGroup>
				<Label for="email">Email</Label>
				<Input
					type="text"
					name="email"
					id="email"
					onChange={handleChange}
					value={formData.email}
				/>
			</FormGroup>
			<FormGroup>
				<Label for="password">Re-enter Password</Label>
				<Input
					type="password"
					name="password"
					id="password"
					onChange={handleChange}
					value={formData.password}
				/>
			</FormGroup>

			{alertMessage.length > 0 ? (
				<Alert color="danger">{alertMessage}</Alert>
			) : null}
			{successMessage.length > 0 ? (
				<Alert color="success">{successMessage}</Alert>
			) : null}

			<Button color="primary">Submit</Button>
		</Form>
	);
};

export default UpdateProfileForm;
