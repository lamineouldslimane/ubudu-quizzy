import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import PrivateRoute from './Components/PrivateRoute';
import Home from "./Screens/Home";
import { AuthContext } from "./Context/auth.js";
import Login from "./Screens/Login";
import Signup from './Screens/Signup';
import Navbar from 'react-bootstrap/Navbar'
import logoSmall from './Assets/logo-small-no-label.png'
import { Nav } from 'react-bootstrap';

function App() {
  const [authTokens, setAuthTokens] = useState();

  const setTokens = (data) => {
    localStorage.setItem("tokens", data);
    setAuthTokens(data);
  }

  const logout = () => {
    setAuthTokens(undefined)
  }

  useEffect(() => {
    setAuthTokens(localStorage.getItem("tokens"))
  }, [])

  return (
    <Router>
      <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
        <section className="App-background">
          {/* Navigation bar */}
          <Navbar bg="dark" className="navbar" variant="dark">
            <section className="brand">
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
            </section>

            <section className="nav-buttons">
              {!authTokens ?
                /* Before loging in */
                (<Nav>
                  <Nav.Item>
                    <Link to='/login' className='nav-link'>Login</Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link to='/signup' className='nav-link'>Register</Link>
                  </Nav.Item>
                </Nav>
                )
                :
                /* After loging in*/
                (<Nav>
                  <Nav.Item>
                    <Link to='/login' onClick={logout} className='nav-link'>Logout</Link>
                  </Nav.Item>
                </Nav>
                )
              }
            </section>
          </Navbar>

          {/* App Body */}
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </section>
      </AuthContext.Provider>
    </Router >
  );
}

export default App;
