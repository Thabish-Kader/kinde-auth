"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/server";
const Clinet = () => {
	const [user, setUser] = useState<KindeUser>();
	const [authStatus, setAuthStatus] = useState(null);
	console.log(user);
	useEffect(() => {
		const getKindeSession = async () => {
			const res = await fetch("/api/kindeSession");
			const data = await res.json();
			console.log(data);
			setUser(data.user);
			setAuthStatus(data.authenticated);
		};

		getKindeSession();
	}, []);

	return (
		<div>
			{authStatus ? (
				<div className="p-12">
					<h1 className="font-bold text-4xl ">Kinde.</h1>
					<div className="flex flex-col h-[500px] items-center justify-center">
						<h1 className="font-bold text-4xl">Client.</h1>
						<div className="flex flex-col h-[500px] items-center justify-center ">
							<div className="flex flex-col p-4   space-x-2 mt-12 rounded-md bg-black text-white">
								<div className="flex items-center space-x-2 ">
									<Image
										src={user?.picture!}
										width={50}
										height={50}
										alt={user?.picture!}
										className="rounded-full"
									/>
									<div className="flex flex-col">
										<div className="flex space-x-2">
											<h2>{user?.given_name}</h2>
											<h2>{user?.family_name}</h2>
										</div>
										<p>
											<span className="text-gray-500">
												{user?.email}
											</span>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<p>Please sign in or register</p>
			)}
		</div>
	);
};

export default Clinet;
