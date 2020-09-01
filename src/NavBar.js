import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
	Navbar,
	Nav,
	NavItem,
	NavbarBrand,
	NavbarToggler,
	Collapse,
} from "reactstrap";
import "./NavBar.css";

const NavBar = ({ loggedIn }) => {
	const [collapsed, setCollapsed] = useState(true);
	const [rightSide, setRightSide] = useState(true);

	useEffect(() => {
		if (loggedIn === false) {
			setRightSide(
				<NavItem>
					<NavLink className="nav-link" exact to="/login">
						Login
					</NavLink>
				</NavItem>
			);
		} else {
			setRightSide(
				<>
					<NavItem>
						<NavLink className="nav-link" exact to="/companies">
							Companies
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className="nav-link" exact to="/jobs">
							Jobs
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className="nav-link" exact to="/profile">
							Profile
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className="nav-link" exact to="/logout">
							Logout
						</NavLink>
					</NavItem>
				</>
			);
		}
	}, [loggedIn]);

	const toggleNavbar = () => setCollapsed(!collapsed);

	return (
		<div>
			<Navbar expand="md" color="light" light>
				<NavbarBrand>
					<NavLink exact to="/">
						Jobly
					</NavLink>
				</NavbarBrand>

				<NavbarToggler onClick={toggleNavbar} className="mr-2" />
				<Collapse isOpen={!collapsed} navbar>
					<Nav className="ml-auto" navbar>
						{rightSide}
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default NavBar;
