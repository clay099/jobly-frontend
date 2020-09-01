import React from "react";
import useCheckLogin from "./hooks/useCheckLogin";
import UpdateProfileForm from "./UpdateProfileForm";

const Profile = () => {
	let checkLogin = useCheckLogin();
	if (checkLogin) {
		return checkLogin;
	}

	return <UpdateProfileForm />;
};

export default Profile;
