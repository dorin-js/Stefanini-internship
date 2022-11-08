import React from "react";

const Error = ({ error }) => {
  return (
    <div className="error">
      <h4>{error}</h4>
    </div>
  );
};

export default Error;
