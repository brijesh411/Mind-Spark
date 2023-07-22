import React from "react";

const Heading = ({ subtitle, title }) => {
  const headingStyleOfh3 = {
    color: "white",
    textAlign: "center",
    fontSize: "20px"
  };

  const headingStyleOfh1 = {
    color: "black",
    textAlign: "center",
    marginTop: "30px",
    fontSize: "30px"
  };

  return (
    <>
      <div className="heading">
        <h3 style={headingStyleOfh3}>{subtitle}</h3>
        <h1 style={headingStyleOfh1}>{title}</h1>
      </div>
    </>
  );
};

export default Heading;
