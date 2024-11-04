import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import News from "./News";
import LandingPage from "./LandingPage";
import {useNavigate} from "react-router-dom";
import LoginNav from "../components/LoginNav";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLoggedIn(true);
    }
  }, []);
  
  return (
    <div className="homepage">
      <h1>News Tracker Homepage</h1>
            {loggedIn ? (
              <>
                <LoginNav setLoggedIn={setLoggedIn} />
                <News />
              </>
            ) : (
              <LandingPage setLoggedIn={setLoggedIn} />
            )}
    </div>
  );
} 
