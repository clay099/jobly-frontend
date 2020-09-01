import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoggedInContext from "./LoggedInContext";

const Login = () => {
	const { loggedIn, setLoggedIn } = useContext(LoggedInContext);

	return loggedIn ? (
		<Redirect to="/jobs" />
	) : (
		<LoginForm setLoggedIn={setLoggedIn} />
	);
};

export default Login;
