import { Link, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="min-h-screen bg-red-600 font-Incon text-white relative">
      <div
        className="absolute inset-0 noise bg-cover opacity-2 z-0"
        style={{
          backgroundImage:
            "url('https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif')",
        }}
      ></div>
      <div className="absolute inset-0 overlay z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-red-200 to-transparent bg-cover bg-no-repeat"
          style={{ animation: "scan 7.5s linear 0s infinite" }}
        ></div>
      </div>
      <div className="flex flex-col justify-center items-center px-4 text-xl uppercase relative z-20 h-screen font-semibold">
        <h1 className="text-6xl">
          Error <span className="text-white">404</span>
        </h1>
        <p className="text-white">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <p className="text-white">
          <span className="text-white">[</span>
          <Link to="/" className="text-white underline" onClick={handleGoBack}>
            go back
          </Link>
          <span className="text-white">]</span> or{" "}
          <span className="text-white">[</span>
          <Link to="/" className="text-white underline">
            return to the homepage
          </Link>
          <span className="text-white">]</span>.
          <p className="text-white text-center">Good luck.</p>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
