import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import LoggedInContext from "./LoggedInContext";

const Logout = () => {
	const { setLoggedIn, loggedIn } = useContext(LoggedInContext);

	const processLogout = () => {
		localStorage.clear();
		setLoggedIn(false);
		return <Redirect to="/" />;
	};

	return loggedIn ? processLogout() : <Redirect to="/login" />;
};

export default Logout;
