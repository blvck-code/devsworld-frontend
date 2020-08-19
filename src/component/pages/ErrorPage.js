import React from "react";
import { Navbar } from "../layouts/Navbar";

function ErrorPage(props) {
  console.log(props);

  return (
    <>
      <h1 style={{ color: "white" }}>Error Page</h1>
      <p style={{ color: "white" }}>{props.location.pathname}</p>
    </>
  );
}

export default ErrorPage;
