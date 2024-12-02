import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import News from "./News";
import Header from "../components/Header";
import LandingPage from "./LandingPage";
import Preferences from "./Preferences";
import {useNavigate} from "react-router-dom";
import LoginNav from "../components/LoginNav";

export default function Home({loggedIn, setLoggedIn, user, setUser}) {
  
  return (
    <>
      <Header setLoggedIn = {setLoggedIn} loggedIn={loggedIn} setUser={setUser}  user={user} />
      <div className="homepage">
              {loggedIn ? (
                <News setUser = {setUser} user = {user}/>
              ) : (
                <LandingPage setLoggedIn = {setLoggedIn} loggedIn={loggedIn} setUser={setUser}  user={user} />
              )}
      </div>
    </>
  );
} 
