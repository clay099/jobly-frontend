import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import useFields from "./hooks/useFields";
import { Button, Form, Input, FormGroup, Label, Alert } from "reactstrap";
import JoblyApi from "./JoblyApi";
import "./LoginForm.css";

const LoginForm = ({ setLoggedIn, loginHidden }) => {
	const [alertMessage, setAlertMessage] = useState("");

	const INITIALSTATE = { username: "", password: "" };
	const [formData, handleChange, resetForm] = useFields(INITIALSTATE);
	const history = useHistory();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await JoblyApi.submitLogin(formData.username, formData.password);
			setLoggedIn(true);
			history.push("/jobs");
		} catch (e) {
			setAlertMessage(e);
		}

		resetForm();
	};

	return (
		<Form className={`LoginForm ${loginHidden}`} onSubmit={handleSubmit}>
			<FormGroup>
				<Label for="username">Email</Label>
				<Input
					type="text"
					name="username"
					id="username"
					onChange={handleChange}
					value={formData.username}
				/>
			</FormGroup>
			<FormGroup>
				<Label for="password">Password</Label>
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

			<Button color="primary">Submit</Button>
		</Form>
	);
};

export default LoginForm;
