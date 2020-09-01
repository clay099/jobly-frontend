import React from "react";
import CardList from "./CardList";
import NewForm from "./NewForm";
import useSearch from "./hooks/useSearch";

const Companies = ({ companies }) => {
	const [foundCompanies, setSearch] = useSearch("companies");

	if (foundCompanies === "no data") {
		return (
			<>
				<NewForm setSearch={setSearch} />
				<h3>Sorry, no results were found!</h3>
			</>
		);
	}

	companies = foundCompanies.length > 0 ? foundCompanies : companies;

	return (
		<>
			<NewForm setSearch={setSearch} />
			{companies.map((c) => (
				<CardList company={c} key={c.handle} />
			))}
		</>
	);
};

export default Companies;
