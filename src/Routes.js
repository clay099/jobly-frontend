import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Companies from "./Companies";
import Company from "./Company";
import Jobs from "./Jobs";
import Login from "./Login";
import Profile from "./Profile";
import { Container } from "reactstrap";

const Routes = () => {
	return (
		<Switch>
			<Container>
				<Route exact path="/companies">
					<Companies />
				</Route>
				<Route exact path="/companies/:name">
					<Company />
				</Route>
				<Route exact path="/jobs">
					<Jobs />
				</Route>
				<Route exact path="/login">
					<Login />
				</Route>
				<Route exact path="/profile">
					<Profile />
				</Route>
				<Route exact path="/">
					<Home />
				</Route>
			</Container>
		</Switch>
	);
};

export default Routes;
