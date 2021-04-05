import React, { useRef, useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import ErrorComponent from '../miniComponents/ErrorComponent/ErrorComponent';

import classes from './LoginSection.module.css';

const LoginSection = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { login } = useAuth();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);

      history.push('/dashboard');
    } catch {
      setError('Failed to sign in');
    }

    setLoading(false);
  };

  return (
    <main className={classes.login}>
      <h1 className={classes.heading}>LOGIN</h1>
      <div className={classes.loginCard}>
        {/* {error && <Alert variant="danger">{error}</Alert>} */}
        {error && <ErrorComponent message={error} />}
        <div className={classes.cardHeader}>
          <div className={classes.cardHeaderLeft}>
            <h3 className={classes.cardHeading}>
              <Link to={'/signup'}>
                <h3 className={classes.cardHeading}>New Adventurer?</h3>
              </Link>
            </h3>
          </div>
          <div className={classes.cardHeaderRight}>
            <h3 className={classes.cardHeading}>Already Registered?</h3>
          </div>
        </div>
        <div className={classes.loginContainer}>
          <h2 className={classes.loginContainerHeading}>Login with EMAIL</h2>
          <form onSubmit={handleSubmit} className={classes.loginForm}>
            <div className={classes.formInputContainer}>
              <label id={'email'}>Email:</label>
              <input
                type={'email'}
                htmlFor={'email'}
                ref={emailRef}
                required
              ></input>
            </div>
            <div className={classes.formInputContainer}>
              <label id={'password'}>Password:</label>
              <input
                type={'password'}
                htmlFor={'password'}
                ref={passwordRef}
                required
              ></input>
            </div>
            <button
              disabled={loading}
              className={classes.loginBtn}
              type={'submit'}
            >
              Login
            </button>
          </form>
          <div className={classes.forgot}>
            <Link to={'/forgot-password'} className={classes.forgot}>
              Forgot Password?
            </Link>
          </div>
        </div>
      </div>
      {/* <Card>
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
          <div className="w-100 text-center mt-3">
            <Link to={'/forgot-password'}>forgo password</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        naeed an accout? <Link to={'/signup'}>Sign Up</Link>
      </div> */}
    </main>
  );
};

export default LoginSection;
