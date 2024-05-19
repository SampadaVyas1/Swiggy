import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AuthorizedHOC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const idToken = localStorage.getItem("idToken");
    if (!idToken) {
      navigate("/login");
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div>
      AuthorizedHOC
      <button onClick={handleLogout}>Logout</button>
      <Outlet />
    </div>
  );
};

export default AuthorizedHOC;
