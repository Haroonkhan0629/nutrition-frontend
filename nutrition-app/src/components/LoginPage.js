import React from "react";
import LoginNav from "./LoginNav";
import UserPage from "./UserPage";

const LoginPage = ({ profile, logout }) => {
  return (
    <div>
        <LoginNav profile={profile} logout={logout} />
        <UserPage profile={profile} />
    </div>
  )
}

export default LoginPage