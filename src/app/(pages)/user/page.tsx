import google from "./Google__G__logo.svg.png"
import React from "react";
export default function DefaultUser() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-gray-800 text-2xl font-bold mb-6 text-center">Login</h2>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>

        <button className="w-full p-3 bg-gray-800 text-white rounLoginScreended-lg flex items-center justify-center mt-4 hover:bg-blue-500 rounded-xl">
          Login
        </button>

        <p className="text-center text-gray-600 my-4">or</p>

        <button className="w-full p-3 bg-gray-800 text-white rounded-xl flex items-center justify-center mt-4 hover:bg-blue-400">
        <img
            src={google.src}
            alt="Google Logo"
            className="w-5 mr-3"
          />
          Log in with Google
        </button>
      </div>
    </div>
  );
}
