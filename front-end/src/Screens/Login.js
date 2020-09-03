import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import logoBig from '../Assets/logo-big-fill.png'
import { useAuth } from "../Context/auth.js";
import { BASE_API_URL } from "../Constants/network";

function Login(props) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(false);
  const { setAuthTokens } = useAuth();
  const referer = '/'

  const postLogin = async () => {
    try {
      // "Loading"
      setDisabled(true)

      const response = await axios.post(`${BASE_API_URL}/users/login`, {
        username,
        password
      })

      setAuthTokens(response.data.token)
      setDisabled(false)
      setLoggedIn(true)
    }
    catch (error) {
      console.log({ error })
      setError(error.response);
    }
  }

  if (isLoggedIn) {
    return <Redirect to={referer} />;
  }

  return (
    <Card className="main-card card-small font-normal">

      {/* Logo */}
      <img
        alt='logo'
        className="logo-img"
        width='138'
        height='128'
        src={logoBig}
      />

      {/* Form */}
      <Form className='form'>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Nom d'utilisateur</Form.Label>
          <Form.Control placeholder="Votre nom d'utilisateur" onChange={e => {
            setUsername(e.target.value);
          }} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control type="password" placeholder="Mot de passe" onChange={e => {
            setPassword(e.target.value);
          }}
          />
        </Form.Group>
        <Button disabled={disabled} onClick={postLogin}>Se connecter</Button>
      </Form>
      <Link className="link" to="/signup">Vous n'avez pas de compte ?</Link>
      {error && <p className="error-text">{error.data || 'Un problème est survenu, veuillez réessayez plus tard'}</p>}
    </Card>
  );
}

export default Login;