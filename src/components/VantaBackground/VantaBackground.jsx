import React, { useEffect } from "react";
import NET from "vanta/dist/vanta.net.min";

const VantaBackground = ({ children }) => {
  useEffect(() => {
    const netEffect = NET({
      el: "#vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 0.5,
      scaleMobile: 1.0,
      color: 0x4e4e4e,
      backgroundColor: 0xa060f,
      points: 15.0,
      maxDistance: 20.0,
    });

    return () => {
      if (netEffect) netEffect.destroy();
    };
  }, []);

  return (
    <div className="overflow-hidden h-screen" id="vanta">
      {children}
    </div>
  );
};

export default VantaBackground;
