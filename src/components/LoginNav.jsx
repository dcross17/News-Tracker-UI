import React from "react";
import { useNavigate } from "react-router-dom";

function LoginNav({ setLoggedIn }) {
    const navigate = useNavigate();

    const logOut = () => {
        localStorage.removeItem("token");
        setLoggedIn(false);
    }

    return (
      <div>
        <button onClick= {logOut}>
          Logout
        </button>
      </div>
    );
  };

  export default LoginNav;