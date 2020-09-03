import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import PrivateRoute from './Components/PrivateRoute';
import Home from "./Screens/Home";
import { AuthContext } from "./Context/auth.js";
import Login from "./Screens/Login";
import Signup from './Screens/Signup';
import Navbar from 'react-bootstrap/Navbar'
import logoSmall from './Assets/logo-small-no-label.png'

function App() {
  const [authTokens, setAuthTokens] = useState();

  const setTokens = (data) => {
    console.log('douze')
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  console.log(authTokens)

  return (
    <Router>
      <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
        {/* Navigation bar */}
        <Navbar bg="dark" className="navbar" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logoSmall}
              width="52"
              height="48"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          <span className="appName">
            Quizzy
          </span>
        </Navbar>

        {/* App Body */}
        <div className="App-background">
          <PrivateRoute exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </div>
      </AuthContext.Provider>
    </Router>
  );
}

export default App;
