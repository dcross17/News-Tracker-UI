import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import News from "./News";
import LandingPage from "./LandingPage";
import {useNavigate} from "react-router-dom";
import LoginNav from "../components/LoginNav";

export default function Home({loggedIn, setLoggedIn, user, setUser}) {
  
  return (
    <div className="homepage">
      <h1>News Tracker Homepage</h1>
            {loggedIn ? (
              <>
                
                <LoginNav setLoggedIn={setLoggedIn} setUser = {setUser} />
                <News />
              </>
            ) : (
              <LandingPage setLoggedIn={setLoggedIn} setUser = {setUser} />
            )}
    </div>
  );
} 
