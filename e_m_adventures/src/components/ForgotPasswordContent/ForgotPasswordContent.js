import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';
import ErrorComponent from '../miniComponents/ErrorComponent/ErrorComponent';
import errorTimeout from '../../helpers/error/errorTimeout';

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
      errorTimeout(setError, 'Failed to reset password');
    }

    setLoading(false);
  };

  return (
    <main className={classes.login}>
      <h1 className={classes.heading}>Forgot Password</h1>
      <div className={classes.loginCard}>
        {error && <ErrorComponent message={error} />}
        {message && <ErrorComponent message={message} />}

        <div className={classes.loginContainer}>
          <h2 className={classes.loginContainerHeading}>Reset Password</h2>
          <form onSubmit={handleSubmit} className={classes.loginForm}>
            <div className={classes.formInputContainer}>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" ref={emailRef} required />
            </div>
            <button
              disabled={loading}
              className={classes.loginBtn}
              type="submit"
            >
              submit
            </button>
          </form>
          <div className={classes.forgot}>
            <Link to="/signup" className={classes.forgot}>
              Need an account? Sign up
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ForgotPasswordContent;
