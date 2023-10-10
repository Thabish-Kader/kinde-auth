import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/server";

export default function Home() {
	return (
		<>
			<header className="border-b p-4">Home </header>
			<div className="flex flex-col items-center justify-center mt-20">
				<div className="flex space-x-4">
					<LoginLink className="border px-2 rounded-lg">
						Sign in
					</LoginLink>

					<RegisterLink className="border px-2 rounded-lg">
						Sign up
					</RegisterLink>
				</div>
			</div>
		</>
	);
}
