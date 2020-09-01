import React from "react";
import useFields from "./hooks/useFields";
import { Button, Form, Input, InputGroup, InputGroupAddon } from "reactstrap";
import "./NewForm.css";

const NewForm = ({ setSearch }) => {
	const [formData, handleChange, resetForm] = useFields({ searchTerm: "" });

	const handleSubmit = async (e) => {
		e.preventDefault();
		setSearch(formData.searchTerm);

		resetForm();
	};

	return (
		<Form className="NewForm" onSubmit={handleSubmit}>
			<InputGroup>
				<Input
					type="text"
					name="searchTerm"
					id="searchTerm"
					placeholder="Enter search term.."
					onChange={handleChange}
					value={formData.searchTerm}
				/>

				<InputGroupAddon addonType="append">
					<Button color="primary">Submit</Button>
				</InputGroupAddon>
			</InputGroup>
		</Form>
	);
};

export default NewForm;
