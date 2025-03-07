import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { signUp, update } = useContext(AuthContext);
  const [error, setError] = useState("");
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    const image = form.image.value;
    const email = form.email.value;
    const password = form.password.value;

    setError("");
    // console.log(user);
    if (!/^(?=.*[A-Z])(?=.*[a-z]).{6,}$/.test(password)) {
      return setError(
        "Password must contain 1 upper case , 1 lowercase and must be 6 characters long"
      );
    }

    signUp(email, password)
      .then((result) => {
        // console.log(result.user);
        toast.success("User signed up successfully");
        update(username, image);
        form.reset();
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Register
        </h2>

        <form onSubmit={handleSignUp} className="mt-6">
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
          <label className="text-red-600 text-sm">{error}</label>

          {/* Register Button */}
          <button type="submit" className="btn btn-primary w-full mt-6">
            Register
          </button>
        </form>

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
