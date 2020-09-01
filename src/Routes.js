import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import Companies from "./Companies";
import Company from "./Company";
import Jobs from "./Jobs";
import Login from "./Login";
import Logout from "./Logout";
import Profile from "./Profile";
import { Container } from "reactstrap";
import JoblyApi from "./JoblyApi";

const Routes = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [companies, setCompanies] = useState([]);
	const [jobs, setJobs] = useState([]);

	useEffect(() => {
		async function getDetails() {
			try {
				let returnedCompanies = await JoblyApi.getCompanies();
				setCompanies(returnedCompanies);
				let returnedJobs = await JoblyApi.getJobs();
				setJobs(returnedJobs);
				setIsLoading(false);
			} catch (error) {
				console.log(error);
			}
		}
		getDetails();
	}, [isLoading]);

	return (
		<Container>
			<Switch>
				<Route exact path="/companies/:name">
					<Company companies={companies} />
				</Route>
				<Route exact path="/companies">
					<Companies companies={companies} />
				</Route>
				<Route exact path="/jobs">
					<Jobs jobs={jobs} />
				</Route>
				<Route exact path="/login">
					<Login />
				</Route>
				<Route exact path="/logout">
					<Logout />
				</Route>
				<Route exact path="/profile">
					<Profile />
				</Route>
				<Route exact path="/">
					<Home />
				</Route>
				<Redirect to="/" />
			</Switch>
		</Container>
	);
};

export default Routes;
