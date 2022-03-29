import React from "react";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div className="error">
      <h1>Oops!</h1>
      <h2 className="fw-bold text-danger">404 - PAGE NOT FOUND</h2>
      <h5>
        The page you are looking fro might have been removed <br />
        had it's name changed or is temporarily unavailable.
      </h5>
    </div>
  );
};

export default NotFound;
