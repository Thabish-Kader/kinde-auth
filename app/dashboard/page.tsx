import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import React from "react";
import Image from "next/image";
const Dashboard = async () => {
	const { getUser, isAuthenticated } = getKindeServerSession();
	const user = getUser();
	console.log(user);
	return isAuthenticated() ? (
		<div>
			<header className="flex items-center justify-between border p-4">
				<h1>Dashboard</h1>
				<LogoutLink className="border px-2 py-1 text-red-500 rounded-md">
					Sign out
				</LogoutLink>
			</header>
			<div className="flex items-center justify-center pt-20">
				<div className="flex flex-col items-center">
					<h2>Welcome {user.given_name}</h2>
					<p>{user.email}</p>
					<Image
						src={user.picture!}
						alt={user.given_name!}
						height={80}
						width={80}
						className="rounded-full"
					/>
				</div>
			</div>
		</div>
	) : (
		<p>Please sign in or register!</p>
	);
};

export default Dashboard;
