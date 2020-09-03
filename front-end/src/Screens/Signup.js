import React, { useState } from "react";
import { Link, Redirect } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import logoBig from '../Assets/logo-big-fill.png'
import axios from 'axios'
import { BASE_API_URL } from "../Constants/network";

function Signup() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [confirmChecked, setConfirmChecked] = useState(false);
  const [error, setError] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [registered, setRegistered] = useState(false);
  const referer = '/login'

  const submit = async (event) => {
    event.preventDefault()

    const error = validateForm()
    if (error) {
      return setError(error)
    }

    try {
      // "Loading"
      setDisabled(true)

      // Request to server
      await axios.post(`${BASE_API_URL}/users/register`, {
        username,
        firstname,
        lastname,
        password
      })

      setDisabled(false)
      setRegistered(true)
    }
    catch (error) {
      setDisabled(false)

      const errorMessage = error.response ? error.response.data :
        'Une erreur est survenue, veuillez réessayez plus tard.'

      setError(errorMessage);
    }
  }

  const validateForm = () => {
    if (!firstname || !lastname || !username ||
      !password || !confirmPass)
      return "Vous n'avez pas rempli tous les champs"

    if (password !== confirmPass)
      return 'Les mots de passes ne correspondent pas.'

    if (!confirmChecked)
      return "Vous n'avez pas coché la case la plus importante... Quand même."
  }

  if (registered) {
    return <Redirect to={referer} />
  }

  return (
    <Card className="main-card card-large font-normal">
      {/* Logo */}
      <img
        alt='logo'
        className="logo-img"
        width='138'
        height='128'
        src={logoBig}
      />

      {/* Form */}
      <Form className="form" onSubmit={submit}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Nom</Form.Label>
          <Form.Control placeholder="Votre Nom" onChange={e => {
            setLastname(e.target.value);
          }} />
        </Form.Group>

        <Form.Group controlId="formBasicFirstName">
          <Form.Label>Prénom</Form.Label>
          <Form.Control placeholder="Votre Prénom" onChange={e => {
            setFirstname(e.target.value);
          }} />
        </Form.Group>

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
          }} />
        </Form.Group>

        <Form.Group controlId="formBasicConfirm">
          <Form.Label>Confirmer le mot de passe</Form.Label>
          <Form.Control type="password" placeholder="Confirmer le mot de passe" onChange={e => {
            setConfirmPass(e.target.value);
          }} />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="J'ai lu les conditions qui n'existent pas." onChange={e => {
            console.log(e.target.checked)
            setConfirmChecked(e.target.checked);
          }} />
        </Form.Group>

        <Button className="button" disabled={disabled} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Link className='link' to="/login">Vous avez déjà un compte ?</Link>
      {error && <p className="error-text">{error}</p>}
    </Card>
  );
}

export default Signup;

