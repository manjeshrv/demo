import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <h1>Sorry, page you're looking for is not found</h1>
      <Link to="/">Back to home</Link>
    </>
  );
};

export default Error;
