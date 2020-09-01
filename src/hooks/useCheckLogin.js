import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import LoggedInContext from "../LoggedInContext";

const useCheckLogin = () => {
	const { loggedIn } = useContext(LoggedInContext);
	if (!loggedIn) {
		return <Redirect to="/login" />;
	}
};

export default useCheckLogin;
