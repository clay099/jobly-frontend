import React, { useState, useEffect } from "react";
import JoblyApi from "./JoblyApi";

const UpdateProfileForm = () => {
	const [userDetails, setUserDetails] = useState({});
	useEffect(() => {
		async function getAllUserDetails(username) {
			let details = await JoblyApi.getUserData(username);
			setUserDetails({ ...details });
			console.log({ ...details });
		}
		const username = localStorage.getItem("username");
		getAllUserDetails(username);
	}, []);
	return (
		<div>
			<p>update form</p>
		</div>
	);
};

export default UpdateProfileForm;
