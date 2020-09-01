import React from "react";
import useCheckLogin from "./hooks/useCheckLogin";

const Profile = () => {
	let checkLogin = useCheckLogin();
	if (checkLogin) {
		return checkLogin;
	}

	return (
		<div>
			<p>Profile</p>
		</div>
	);
};

export default Profile;
