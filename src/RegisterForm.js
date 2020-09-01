import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import useFields from "./hooks/useFields";
import { Button, Form, Input, FormGroup, Label, Alert } from "reactstrap";
import JoblyApi from "./JoblyApi";
import "./RegisterForm.css";

const RegisterForm = ({ setLoggedIn, registerHidden }) => {
	const [alertMessage, setAlertMessage] = useState("");

	const INITIALSTATE = {
		username: "",
		password: "",
		first_name: "",
		last_name: "",
		email: "",
	};
	const [formData, handleChange, resetForm] = useFields(INITIALSTATE);
	const history = useHistory();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await JoblyApi.submitRegister(formData);
			setLoggedIn(true);
			history.push("/jobs");
		} catch (e) {
			setAlertMessage(e);
			console.log(e);
		}

		resetForm();
	};

	return (
		<Form
			className={`RegisterForm ${registerHidden}`}
			onSubmit={handleSubmit}
		>
			<FormGroup>
				<Label for="username">Email</Label>
				<Input
					type="text"
					name="username"
					id="signup_username"
					onChange={handleChange}
					value={formData.username}
				/>
			</FormGroup>
			<FormGroup>
				<Label for="password">Password</Label>
				<Input
					type="password"
					name="password"
					id="signup_password"
					onChange={handleChange}
					value={formData.password}
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

			{alertMessage.length > 0
				? alertMessage.map((m) => <Alert color="danger">{m}</Alert>)
				: null}

			<Button color="primary">Submit</Button>
		</Form>
	);
};

export default RegisterForm;
