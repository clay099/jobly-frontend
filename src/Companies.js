import React from "react";
import CardList from "./CardList";
import SearchForm from "./SearchForm";
import useSearch from "./hooks/useSearch";

const Companies = ({ companies }) => {
	const [foundCompanies, setSearch] = useSearch("companies");

	if (foundCompanies === "no data") {
		return (
			<>
				<SearchForm setSearch={setSearch} />
				<h3>Sorry, no results were found!</h3>
			</>
		);
	}

	companies = foundCompanies.length > 0 ? foundCompanies : companies;

	return (
		<>
			<SearchForm setSearch={setSearch} />
			{companies.map((c) => (
				<CardList company={c} key={c.handle} />
			))}
		</>
	);
};

export default Companies;
