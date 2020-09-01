import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./JoblyApi";
import CardList from "./CardList";
import "./Company.css";
import useCheckLogin from "./hooks/useCheckLogin";

const Company = () => {
	const { name } = useParams();
	const INITIALSTATE = {};
	const [company, setCompany] = useState(INITIALSTATE);
	let checkLogin = useCheckLogin();

	useEffect(() => {
		async function getDetails() {
			try {
				let returnedCompany = await JoblyApi.getCompany(name);
				setCompany(returnedCompany);
			} catch (error) {
				console.log(error);
			}
		}

		getDetails();
	}, [name]);

	if (checkLogin) {
		return checkLogin;
	}

	if (company.jobs === undefined) {
		return <p>Loading &hellip;</p>;
	}

	return (
		<div className="Company">
			<h4>{company.name}</h4>
			<p>{company.description}</p>
			{company.jobs.map((job) => (
				<CardList job={job} />
			))}
		</div>
	);
};

export default Company;
