import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <img
        src="https://i.ibb.co.com/763S1k0/404-error-with-tired-person-concept-illustration-114360-7899.jpg"
        alt=""
      />
      <button className="btn bg-lime-300">
        <Link to={"/"}>Go to Home page</Link>
      </button>
    </div>
  );
};

export default ErrorPage;
