import React, { useContext, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoggedInContext from "./LoggedInContext";
import RegisterForm from "./RegisterForm";
import { Button } from "reactstrap";
import "./Login.css";

const Login = () => {
	const { loggedIn, setLoggedIn } = useContext(LoggedInContext);

	const [loginHidden, setLoginHidden] = useState("");
	const [registerHidden, setRegisterHidden] = useState("hidden");

	const [loginColor, setLoginColor] = useState("primary");
	const [registerColor, setRegisterColor] = useState("secondary");

	useEffect(() => {
		if (loginHidden) {
			setLoginColor("secondary");
			setRegisterColor("primary");
		} else {
			setLoginColor("primary");
			setRegisterColor("secondary");
		}
	}, [loginHidden]);

	const hideLogin = () => {
		setLoginHidden("");
		setRegisterHidden("hidden");
	};

	const hideRegister = () => {
		setLoginHidden("hidden");
		setRegisterHidden("");
	};

	return loggedIn ? (
		<Redirect to="/jobs" />
	) : (
		<div className="Login">
			<Button onClick={hideLogin} color={loginColor}>
				Login
			</Button>
			<Button onClick={hideRegister} color={registerColor}>
				Register
			</Button>
			<LoginForm setLoggedIn={setLoggedIn} loginHidden={loginHidden} />
			<RegisterForm
				setLoggedIn={setLoggedIn}
				registerHidden={registerHidden}
			/>
		</div>
	);
};

export default Login;
