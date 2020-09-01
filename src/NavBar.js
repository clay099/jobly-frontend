import React, { useState } from "react";
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

const NavBar = () => {
	const [collapsed, setCollapsed] = useState(true);

	const toggleNavbar = () => setCollapsed(!collapsed);

	return (
		<div>
			<Navbar expand="md" color="light" light>
				<NavbarBrand>
					<NavLink className="nav-link" exact to="/">
						Jobly
					</NavLink>
				</NavbarBrand>

				<NavbarToggler onClick={toggleNavbar} className="mr-2" />
				<Collapse isOpen={!collapsed} navbar>
					<Nav className="ml-auto" navbar>
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
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default NavBar;
