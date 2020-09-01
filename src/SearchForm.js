import React from "react";
import useFields from "./hooks/useFields";
import { Button, Form, Input, InputGroup, InputGroupAddon } from "reactstrap";
import "./SearchForm.css";

const SearchForm = ({ setSearch }) => {
	const [formData, handleChange, resetForm] = useFields({ searchTerm: "" });

	const handleSubmit = async (e) => {
		e.preventDefault();
		setSearch(formData.searchTerm);

		resetForm();
	};

	return (
		<Form className="SearchForm" onSubmit={handleSubmit}>
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

export default SearchForm;
