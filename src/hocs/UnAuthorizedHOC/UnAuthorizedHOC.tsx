import React from "react";
import { Outlet } from "react-router-dom";

const UnAuthorizedHOC = () => {
  return <Outlet />;
};

export default UnAuthorizedHOC;
