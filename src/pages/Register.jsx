import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Register
        </h2>

        <form className="mt-6">
          {/* Username */}
          <label className="block mb-2 text-sm text-gray-600">Username</label>
          <input
            type="text"
            name="username"
            className="input input-bordered w-full"
            placeholder="Enter your username"
            required
          />
          {/* Profile Image Upload */}
          <label className="block mt-4 mb-2 text-sm text-gray-600">
            Profile Image
          </label>
          <input
            type="text"
            name="image"
            className="input input-bordered w-full"
            placeholder="Enter Photo URL"
            required
          />

          {/* Email */}
          <label className="block mt-4 mb-2 text-sm text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            className="input input-bordered w-full"
            placeholder="Enter your email"
            required
          />

          {/* Password */}
          <label className="block mt-4 mb-2 text-sm text-gray-600">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="input input-bordered w-full"
            placeholder="Enter your password"
            required
          />

          {/* Register Button */}
          <button type="submit" className="btn btn-primary w-full mt-6">
            Register
          </button>
        </form>

        {/* Google Sign-in */}
        <button className="btn btn-outline w-full mt-4">
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          Sign in with Google
        </button>

        {/* Already have an account */}
        <div className="mt-4 text-sm text-center">
          <p>
            Already have an account?
            <Link to="/auth/login" className="text-blue-500 ml-1">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
