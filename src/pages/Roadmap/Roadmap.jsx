import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Roadmap = () => {
  const { type } = useParams();
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    let url = `/roadmaps/${type.toLowerCase()}.html`;

    fetch(url)
      .then((response) => response.text())
      .then((html) => {
        setHtmlContent(html);
      })
      .catch((error) => {
        console.error("Error fetching HTML:", error);
      });
  }, [type]);

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
