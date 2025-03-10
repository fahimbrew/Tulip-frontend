import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
  };
  const links = (
    <>
      <li className="font-bold">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `${isActive ? "text-pink-500" : "hover:text-purple-400"}`
          }
        >
          Home
        </NavLink>
      </li>
      <li className="font-bold">
        <NavLink
          to={"/allCampaign"}
          className={({ isActive }) =>
            `${isActive ? "text-pink-500" : "hover:text-purple-400"}`
          }
        >
          All Campaign
        </NavLink>
      </li>
      {user && (
        <>
          <li className="font-bold">
            <NavLink
              to={"/addCampaign"}
              className={({ isActive }) =>
                `${isActive ? "text-pink-500" : "hover:text-purple-400"}`
              }
            >
              Add New Campaign
            </NavLink>
          </li>
          <li className="font-bold">
            <NavLink
              to={`/myCampaign/${user?.email}`}
              className={({ isActive }) =>
                `${isActive ? "text-pink-500" : "hover:text-purple-400"}`
              }
            >
              My Campaign
            </NavLink>
          </li>
          <li className="font-bold">
            <NavLink
              to={`/myDonation/${user?.email}`}
              className={({ isActive }) =>
                `${isActive ? "text-pink-500" : "hover:text-purple-400"}`
              }
            >
              My Donation
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-4xl">
          <span className="text-pink-400">Crowd</span>
          <span className="font-thin text-purple-400">Cube</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-3">
              <h3 className="font-bold text-sm text-pink-400">{user?.email}</h3>
              <img
                className="w-10 h-10 rounded-full"
                src={user?.photoURL}
                alt=""
              />
            </div>
            <button
              onClick={handleLogout}
              className="btn bg-purple-400 text-white"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to={"/auth/login"} className="btn bg-purple-400 text-white">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
