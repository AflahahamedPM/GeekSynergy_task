import React, { memo, useCallback, useState } from "react";
import NameInput from "./NameInput";
import PasswordInput from "./PasswordInput";
import { useNavigate } from "react-router";

const LoginPage = memo(() => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = useCallback((e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const password = formData.get("password");

    const userDetails = JSON.parse(localStorage.getItem("userCredentials"));

    for (const i in userDetails) {
      if (
        userDetails[i].name === name &&
        userDetails[i].password === password
      ) {
        navigate("/home");
      } else {
        setError("invalid Credentials");
      }
    }
  });

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-lg sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-4 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h2 className="text-2xl font-bold leading-tight text-blue-950 mb-8 text-center">
                  Login
                </h2>
                <div className="flex justify-center items-center h-5/6">
                  <form
                    onSubmit={(e) => {
                      handleLogin(e);
                    }}
                    className="grid grid-cols-1"
                  >
                    <NameInput />
                    <PasswordInput />
                    {error && <p className="text-red-600 pb-4">{error}</p>}
                    <button
                      type="submit"
                      className="w-full bg-blue-950 hover:bg-blue-900 text-white font-semibold py-3 px-8 rounded-lg transition duration-150 ease-in-out"
                    >
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default LoginPage;
