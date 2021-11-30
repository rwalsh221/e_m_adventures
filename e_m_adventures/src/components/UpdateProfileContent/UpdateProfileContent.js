import React, { useRef, useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import ErrorComponent from '../miniComponents/ErrorComponent/ErrorComponent';
import errorTimeout from '../../helpers/error/errorTimeout';

import classes from './UpdateProfileContent.module.css';

const UpdateProfileContent = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const { currentUser, updatePassword, updateEmail } = useAuth();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return errorTimeout(setError, 'Passwords do not match');
    }

    const promises = [];
    setLoading(true);
    setError('');

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }

    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        history.push('./dashboard');
      })
      .catch(() => {
        errorTimeout(setError, 'failed to update account');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <main className={classes.update}>
      <h1 className={classes.heading}>UPDATE PROFILE</h1>
      <div className={classes.loginCard}>
        <div className={classes.loginContainer}>
          <h2 className={classes.loginContainerHeading}>UPDATE</h2>
          {error && <ErrorComponent messageProps={error} />}
          <form onSubmit={handleSubmit} className={classes.loginForm}>
            <div className={classes.formInputContainer}>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" ref={emailRef} required />
            </div>
            <div className={classes.formInputContainer}>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                ref={passwordRef}
                placeholder="leave blank to keep the same"
              />
            </div>
            <div className={classes.formInputContainer}>
              <label htmlFor="password-confirm">Password Confirm:</label>
              <input
                type="password"
                id="password-confirm"
                ref={passwordConfirmRef}
                placeholder="leave blank to keep the same"
              />
            </div>
            <button
              disabled={loading}
              className={classes.loginBtn}
              type="submit"
            >
              UPDATE
            </button>
          </form>
        </div>
      </div>

      <div>
        <Link to="/dashboard">cancel</Link>
      </div>
    </main>
  );
};

export default UpdateProfileContent;
