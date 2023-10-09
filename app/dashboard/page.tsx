import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import React from "react";

const Dashboard = async () => {
	const { getUser, isAuthenticated } = getKindeServerSession();
	const user = getUser();

	return isAuthenticated() ? (
		<div>
			<h2>{user.given_name}</h2>
			<p>{user.email}</p>
			<LogoutLink>Sign out</LogoutLink>
		</div>
	) : (
		<p>Please sign in or register!</p>
	);
};

export default Dashboard;
