import React, { useRef, useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';
import ErrorComponent from '../miniComponents/ErrorComponent/ErrorComponent';
import { errorTimeout } from '../../helpers/error/errorTimeout';
import classes from './SignupContent.module.css';

const Signup = () => {
  const database =
    'https://e-m-adventures-development-default-rtdb.europe-west1.firebasedatabase.app/';

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const { signup } = useAuth();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return errorTimeout(setError, 'Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value).then(
        (newUser) => {
          axios.patch(
            `${database}users.json?auth=${process.env.REACT_APP_FIREBASE_DATABASE_SECRET}`,
            {
              [newUser.user.uid]: {
                email: newUser.user.email,
                uid: newUser.user.uid,
                role: 'user',
              },
            }
          );
        }
      );

      history.push('./dashboard');
    } catch {
      errorTimeout(setError, 'Failed to create an account');
    }

    setLoading(false);
  };

  return (
    <main className={classes.signup}>
      <h1 className={classes.heading}>SIGN UP</h1>
      <div className={classes.loginCard}>
        {error && <ErrorComponent message={error} />}
        <div className={classes.cardHeader}>
          <div className={classes.cardHeaderLeft}>
            <h3 className={classes.cardHeading}>New Adventurer?</h3>
          </div>
          <div className={classes.cardHeaderRight}>
            <h3 className={classes.cardHeading}>
              <Link to="/login">
                <h3 className={classes.cardHeading}>Already Registered?</h3>
              </Link>
            </h3>
          </div>
        </div>
        <div className={classes.loginContainer}>
          <h2 className={classes.loginContainerHeading}>SIGN UP</h2>
          <form onSubmit={handleSubmit} className={classes.loginForm}>
            <div className={classes.formInputContainer}>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" ref={emailRef} required />
            </div>
            <div className={classes.formInputContainer}>
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" ref={passwordRef} required />
            </div>
            <div className={classes.formInputContainer}>
              <label htmlFor="password-confirm">Password Confirm:</label>
              <input
                type="password"
                id="password-confirm"
                ref={passwordConfirmRef}
                required
              />
            </div>
            <button
              disabled={loading}
              className={classes.loginBtn}
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Signup;
