import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { login } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((result) => {
        // console.log(result.user);
        toast.success("Logged in successfully");
        form.reset();
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>

        <form onSubmit={handleLogin} className="mt-6">
          {/* Email Input */}
          <label className="block mt-4 mb-2 text-sm text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            className="input input-bordered w-full"
            placeholder="Enter your email"
            required
          />

          {/* Password Input */}
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

          {/* Login Button */}
          <button type="submit" className="btn btn-primary w-full mt-6">
            Login
          </button>
        </form>

        {/* Register & Forgot Password Links */}
        <div className="mt-4 text-sm text-center">
          <p>
            Don't have an account?
            <Link to="/auth/register" className="text-blue-500 ml-1">
              Register
            </Link>
          </p>
          <p>
            <a href="/forgot-password" className="text-blue-500">
              Forgot password?
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
