import { Link, useNavigate } from "react-router-dom";
import "./404.css";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="bg-[#1a1f2ce2] h-screen overflow-hidden">
      <div className="body text-lg sm:text-sm lg:text-xl">
        <div className="noise"></div>
        <div className="overlay"></div>
        <div className="terminal flex flex-col justify-center items-center">
          <h1 className="errorcode text-3xl sm:text-2xl lg:text-5xl mb-2">
            Error <span>404</span>
          </h1>
          <div className="items-start">
            <p className="output">
              The page you are looking for might have been removed, had its name
              changed, or is temporarily unavailable.
            </p>
            <p className="output">
              <Link to="/" className="link" onClick={handleGoBack}>
                go back
              </Link>{" "}
              <span> or </span>{" "}
              <Link to="/dashboard" className="link">
                return to the homepage
              </Link>
            </p>
            <p className="output">Good luck.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
