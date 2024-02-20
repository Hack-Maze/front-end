import { useNavigate } from "react-router-dom";
import CaptchaPage from "../../pages/CapthchaPage";
import { useState } from "react";

const VerificationMiddleware = ({ children }) => {
  const [verified, setVerified] = useState(false);
  const navigate = useNavigate();

  const handleVerificationResponse = (isVerified) => {
    setVerified(isVerified);
  };

  if (!verified) {
    navigate("/verification");
    return (
      <CaptchaPage handleVerificationResponse={handleVerificationResponse} />
    );
  }

  return children;
};

export default VerificationMiddleware;
