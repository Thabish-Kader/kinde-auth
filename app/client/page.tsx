"use client";
import React, { useState, useEffect } from "react";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
const Clinet = () => {
	const [user, setUser] = useState<any>();
	const [authStatus, setAuthStatus] = useState(null);

	useEffect(() => {
		const getKindeSession = async () => {
			const res = await fetch("/api/kindeSession");
			const data = await res.json();
			setUser(data.user);
			setAuthStatus(data.authenticated);
		};

		getKindeSession();
	}, []);

	return (
		<div>
			<header className="flex items-center justify-between border p-4">
				<h1>Clinet </h1>
			</header>
			<div className="flex items-center justify-center pt-20">
				<div className="flex flex-col items-center">
					<h2>Welcome {user?.given_name}</h2>
					<p>{user?.email}</p>
					<Image
						src={user?.picture!}
						alt={user?.given_name!}
						height={80}
						width={80}
						className="rounded-full"
					/>
				</div>
			</div>
		</div>
	);
};

export default Clinet;
