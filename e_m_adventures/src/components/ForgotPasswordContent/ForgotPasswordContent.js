import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import ErrorComponent from '../miniComponents/ErrorComponent/ErrorComponent';

import classes from './ForgotPasswordContent.module.css';

const ForgotPasswordContent = () => {
  const emailRef = useRef();

  const { resetPassword } = useAuth();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setMessage('');
      setError('');
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage('Check your inbox for the password reset Email');
    } catch {
      setError('Failed to Reset Password');
    }

    setLoading(false);
  };

  return (
    <main className={classes.login}>
      <h1 className={classes.heading}>Forgot Password</h1>
      <div className={classes.loginCard}>
        {/* {error && <Alert variant="danger">{error}</Alert>} */}
        {error && <ErrorComponent message={error} />}

        <div className={classes.loginContainer}>
          <h2 className={classes.loginContainerHeading}>Reset Password</h2>
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
            <button
              disabled={loading}
              className={classes.loginBtn}
              type={'submit'}
            >
              submit
            </button>
          </form>
          <div className={classes.forgot}>
            <Link to={'/signup'} className={classes.forgot}>
              Need an account? Sign up
            </Link>
          </div>
        </div>
      </div>
      {/* <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Reset Password</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>

            <Button disabled={loading} className="w-100" type="submit">
              Reset Password
            </Button>
          </Form>
          <div className="w-100 text-center mt-2">
            <Link to={'/login'}>Log in</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        need an account? <Link to={'/signup'}>Sign Up</Link>
      </div> */}
    </main>
  );
};

export default ForgotPasswordContent;
