import React, { useState, useEffect } from "react";
import Routes from "./Routes";
import NavBar from "./NavBar";
import "./App.css";
import LoggedInContext from "./LoggedInContext";

function App() {
	const [loggedIn, setLoggedIn] = useState(
		localStorage.getItem("_token") !== null
	);

	return (
		<div className="App">
			<LoggedInContext.Provider value={{ setLoggedIn, loggedIn }}>
				<NavBar loggedIn={loggedIn} />
				<Routes />
			</LoggedInContext.Provider>
		</div>
	);
}

export default App;
