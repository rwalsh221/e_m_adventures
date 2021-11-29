import React, { useRef, useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import ErrorComponent from '../miniComponents/ErrorComponent/ErrorComponent';
import errorTimeout from '../../helpers/error/errorTimeout';

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
      errorTimeout(setError, 'Failed to Log In');
    }

    setLoading(false);
  };

  return (
    <main className={classes.login}>
      <h1 className={classes.heading}>LOGIN</h1>
      <div className={classes.loginCard}>
        {error && <ErrorComponent message={error} />}
        <div className={classes.cardHeader}>
          <div className={classes.cardHeaderLeft}>
            <h3 className={classes.cardHeading}>
              <Link to="/signup">
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
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" ref={emailRef} required />
            </div>
            <div className={classes.formInputContainer}>
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" ref={passwordRef} required />
            </div>
            <button
              disabled={loading}
              className={classes.loginBtn}
              type="submit"
            >
              Login
            </button>
          </form>
          <div className={classes.forgot}>
            <Link to="/forgot-password" className={classes.forgot}>
              Forgot Password?
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginSection;
