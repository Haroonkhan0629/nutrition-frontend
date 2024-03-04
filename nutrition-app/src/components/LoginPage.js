import React from "react";
import UserPage from "./UserPage";

function LoginPage({ profile, login, logout, theme }) {
    return (
        <div>
        {profile ? (
          <div>
            <UserPage profile={profile} logout={logout} theme={theme}/>
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