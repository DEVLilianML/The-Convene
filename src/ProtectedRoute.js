import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "./Components/Mainpage/UserAuthContext";
const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();

  console.log("Check user in Private: ", user);
  if (!user) {
    return <Navigate to="/userprofile" />;
  }
  return children;
};

export default ProtectedRoute;