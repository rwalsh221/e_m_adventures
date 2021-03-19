// WDS COURSE LOGIN COPONent

import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

import classes from './LoginSection.module.css';

const LoginSection = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { signup } = useAuth();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError('Failed to sign in');
    }

    setLoading(false);
  };

  return (
    <main className={classes.login}>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Login</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        naeed an accout? <Link to={'/signup'}>Sign Up</Link>
      </div>
    </main>
  );
};

export default LoginSection;

/*
MY LOGIN COMOPONENT


import React from 'react';
import { Link } from 'react-router-dom';

import classes from './LoginSection.module.css';

const Login = (props) => {
  return (
    <main className={classes.login}>
      <div className={classes.loginContainer}>
        <form className={classes.loginForm}>
          <label>UserName</label>
          <input></input>
          <label>Password</label>
          <input></input>
          <Link
            className={classes.loginBtn}
            role="button"
            to="/login"
            // onClick={this.handleClick()}
          >
            LOGIN
          </Link>
        </form>
      </div>
    </main>
  );
};

export default Login;*/
