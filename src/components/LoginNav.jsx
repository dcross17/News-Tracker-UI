import React from "react";
import { useNavigate } from "react-router-dom";

function LoginNav({ setLoggedIn, setUser }) {
    const navigate = useNavigate();

    const logOut = () => {
        localStorage.removeItem("token");
        sessionStorage.removeItem("user");
        setLoggedIn(false);
        setUser({});
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