import { getAuth } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const { name, email } = formData;
  function onLogOut() {
    auth.signOut();
    navigate("/");
  }

  return (
    <>
      <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
        <h1 className="mt-2 text-3xl font-bold text-center">My Profile</h1>
        <div className="w-full md:w-[50%] mt-6 px-3">
          <form>
            {/* Name input */}
            <input
              type="text"
              id="name"
              value={name}
              disabled
              className="w-full px-4 py-3 mb-6 rounded bg-white border border-gray-300"
            />
            {/* Email input */}
            <input
              type="email"
              id="email"
              value={email}
              disabled
              className="w-full px-4 py-3 mb-6 rounded bg-white border border-gray-300"
            />
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg md:text-base">
              <p className="flex items-center">
                Do you want to change your name{" "}
                <span className="text-red-500 ml-1 hover:text-red-700 transition ease-in-out duration-200 cursor-pointer">
                  Edit
                </span>
              </p>
              <p
                onClick={onLogOut}
                className="text-blue-700 hover:text-blue-800 transition ease-in-out duration-200 cursor-pointer"
              >
                Sign Out
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
