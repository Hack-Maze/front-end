import React, { useEffect, useState } from "react";

const Roadmap = () => {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    fetch("roadmaps/offensive-mindmap-expanded.html")
      .then((response) => response.text())
      .then((html) => {
        setHtmlContent(html);
      })
      .catch((error) => {
        console.error("Error fetching HTML:", error);
      });
  }, []);

  return (
    <div>
      <iframe
        title="Roadmap"
        srcDoc={htmlContent}
        style={{ width: "100%", height: "100vh", border: "none" }}
      ></iframe>
    </div>
  );
};

export default Roadmap;
