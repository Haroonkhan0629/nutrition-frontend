import React from "react";
import LoginNav from "./LoginNav";
import UserPage from "./UserPage";

const LoginPage = ({ profile, logout, login }) => {
    return (
        <div>
        {profile ? (
          <div>
            <LoginNav profile={profile} logout={logout}/>
            <UserPage profile={profile}/>
          </div>
        ) : (
          <div className="login-container">
            <button className="login-button" onClick={login}>
              Sign in with Google
            </button>
          </div>
        )}
      </div>
    )
}

export default LoginPage