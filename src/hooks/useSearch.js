import { useState, useEffect } from "react";
import JoblyApi from "../JoblyApi";

const useSearch = (searchType) => {
	const [filteredItem, setFilteredItem] = useState([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		async function startSearch() {
			try {
				let returnedData;
				if (searchType === "companies") {
					returnedData = await JoblyApi.searchCompanies(search);
				} else if (searchType === "jobs") {
					returnedData = await JoblyApi.searchJobs(search);
				}
				if (returnedData.length === 0) {
					setFilteredItem("no data");
				} else {
					setFilteredItem(returnedData);
				}
			} catch (e) {
				console.log(e);
			}
		}
		startSearch();
	}, [search]);

	return [filteredItem, setSearch];
};

export default useSearch;
