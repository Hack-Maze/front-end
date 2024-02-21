import React, { useRef } from "react";
import { Turnstile } from "@marsidev/react-turnstile";

const CaptchaPage = ({ handleVerificationResponse }) => {
  const turnstileRef = useRef(null);

  const handleVerification = async (token) => {
    if (token) {
      setTimeout(() => {
        handleVerificationResponse(true);
        if (turnstileRef.current) {
          turnstileRef.current.remove();
        }
      }, 2000);
      //   try {
      //     const res = await fetch("/api/verify", {
      //       method: "POST",
      //       body: JSON.stringify({ token }),
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //     });
      //     const data = await res.json();
      //     if (data.success) {
      //       console.log("Token validated successfully!");
      //       handleVerificationResponse(true);
      //     } else {
      //       console.error("Token validation failed:", data.error);
      //       handleVerificationResponse(false);
      //     }
      //   } catch (error) {
      //     console.error("Error occurred while verifying token:", error);
      //     handleVerificationResponse(false);
      //   }
    }
  };

  const handleTokenSuccess = (token) => {
    handleVerification(token);
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div
      className="flex flex-col justify-center items-center h-screen text-white font-Grotesk"
      style={{
        background:
          "linear-gradient(to bottom, rgba(15, 32, 24, 0.99),rgb(10, 18, 26))",
      }}
    >
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">CAPTCHA Verification</h1>
      </div>
      <Turnstile
        // siteKey="0x4AAAAAAASbBGhzW0RhAnQi" demo
        siteKey="0x4AAAAAAASWY7Au8IQHj96l"
        onSuccess={handleTokenSuccess}
        ref={turnstileRef}
      />
      <div className="text-center mt-8">
        <p>Having trouble with the CAPTCHA?</p>
        <button
          className="px-4 py-2 mt-3 hover:text-[#5EE848] hover:bg-gray-700 border border-[#5EE848] rounded-md"
          onClick={handleRefresh}
        >
          Refresh
        </button>
      </div>
    </div>
  );
};

export default CaptchaPage;
