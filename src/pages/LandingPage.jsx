import React from 'react';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

function LandingPage({setLoggedIn}) {
  return (
    <div>
      <h1>Welcome to the News Tracker!</h1>
        <p>Sign up or login to get started</p>

        <main>
            <Link to="/login">
                <button>
                    Login
                </button>
            </Link>

            <Link to="/signup">
                <button>
                    Signup
                </button>
            </Link>
        </main>


    </div>


  );
}

export default LandingPage;