"use client";
import React, { useState, useEffect } from "react";

const Clinet = () => {
	const [user, setUser] = useState<any>();
	const [authStatus, setAuthStatus] = useState(null);

	console.log(user);
	console.log(authStatus);
	useEffect(() => {
		const getKindeSession = async () => {
			const res = await fetch("/api/kindeSession");
			const data = await res.json();
			setUser(data.user);
			setAuthStatus(data.authenticated);
		};

		getKindeSession();
	}, []);
	return <div>Clinet</div>;
};

export default Clinet;
