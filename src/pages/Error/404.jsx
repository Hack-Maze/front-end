import { Link, useNavigate } from "react-router-dom";
import "./404.css";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="bg-red-500 h-screen">
      <div className="body">
        <div className="noise"></div>
        <div className="overlay"></div>
        <div className="terminal">
          <h1>
            Error <span className="errorcode">404</span>
          </h1>
          <p className="output">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
          <p className="output">
            <Link to="/" className="link" onClick={handleGoBack}>
              go back
            </Link>{" "}
            <span> or </span>{" "}
            <Link to="/" className="link">
              return to the homepage
            </Link>
          </p>
          <p className="output">Good luck.</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
