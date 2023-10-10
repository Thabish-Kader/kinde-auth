import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/server";

export default function Home() {
  return (
    <div className="p-12">
      <h1 className="font-bold text-4xl ">Kinde Auth.</h1>
      <div className="flex flex-col h-[500px] items-center justify-center">
        <h1 className="font-bold text-4xl">Home Page.</h1>
        <div className="flex items-center space-x-2 mt-12">
          <LoginLink className="bg-black text-white px-2 py-1 rounded-md">
            Sign In
          </LoginLink>
          <RegisterLink className="border px-2 py-1 rounded-md">
            Sign up
          </RegisterLink>
        </div>
      </div>
    </div>
  );
}
