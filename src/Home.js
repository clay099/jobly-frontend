import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import "./Home.css";

const Home = () => {
	const checkLoggedIn = localStorage.getItem("_token") !== null;

	const message = checkLoggedIn ? (
		<h3>Welcome Back!</h3>
	) : (
		<Button color="primary">
			<Link exact to="/login">
				Log In
			</Link>
		</Button>
	);

	return (
		<div className="Home">
			<h1>Jobly</h1>
			<p>All the jobs in one, continent place.</p>
			{message}
		</div>
	);
};

export default Home;
