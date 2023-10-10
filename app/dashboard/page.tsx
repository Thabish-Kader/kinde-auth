import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import React from "react";

const Dashboard = async () => {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = getUser();
  console.log(user);
  return isAuthenticated() ? (
    <div>
      <div className="p-12">
        <h1 className="font-bold text-4xl ">Kinde.</h1>
        <div className="flex flex-col h-[500px] items-center justify-center">
          <h1 className="font-bold text-4xl">Dashboard.</h1>
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
                    <span className="text-gray-500">{user?.email}</span>
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <LogoutLink className="mt-5 bg-white font-bold w-[90px] rounded-md flex justify-center text-black">
                  Sign out
                </LogoutLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <p>Please sign in or register!</p>
  );
};

export default Dashboard;
