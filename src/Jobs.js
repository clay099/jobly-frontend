import React from "react";
import CardList from "./CardList";
import SearchForm from "./SearchForm";
import useSearch from "./hooks/useSearch";
import useCheckLogin from "./hooks/useCheckLogin";

const Jobs = ({ jobs }) => {
	const [foundJobs, setSearch] = useSearch("jobs");

	let checkLogin = useCheckLogin();
	if (checkLogin) {
		return checkLogin;
	}

	if (foundJobs === "no data") {
		return (
			<>
				<SearchForm setSearch={setSearch} />
				<h3>Sorry, no results were found!</h3>
			</>
		);
	}

	jobs = foundJobs.length > 0 ? foundJobs : jobs;

	return (
		<div>
			<>
				<SearchForm setSearch={setSearch} />
				{jobs.map((job) => (
					<CardList job={job} key={job.id} />
				))}
			</>
		</div>
	);
};

export default Jobs;
