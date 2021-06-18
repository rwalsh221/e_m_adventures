import React, { useRef, useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import ErrorComponent from '../miniComponents/ErrorComponent/ErrorComponent';
import { errorTimeout } from '../../helpers/error/errorTimeout';

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
        {/* <div className={classes.cardHeader}>
          <div className={classes.cardHeaderLeft}>
            <h3 className={classes.cardHeading}>New Adventurer?</h3>
          </div>
          <div className={classes.cardHeaderRight}>
            <h3 className={classes.cardHeading}>
              <Link to={'/login'}>
                <h3 className={classes.cardHeading}>Already Registered?</h3>
              </Link>
            </h3>
          </div>
        </div> */}
        <div className={classes.loginContainer}>
          <h2 className={classes.loginContainerHeading}>UPDATE</h2>
          {error && <ErrorComponent message={error} />}
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
                placeholder="leave blank to keep the same"
              ></input>
            </div>
            <div className={classes.formInputContainer}>
              <label id={'password-confirm'}>Password Confirm:</label>
              <input
                type={'password'}
                htmlFor={'password-confirm'}
                ref={passwordConfirmRef}
                placeholder="leave blank to keep the same"
              ></input>
            </div>
            <button
              disabled={loading}
              className={classes.loginBtn}
              type={'submit'}
            >
              UPDATE
            </button>
          </form>
        </div>
      </div>
      {/* <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Update Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                ref={emailRef}
                required
                defaultValue={currentUser.email}
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                placeholder="leave blank to keep the same"
              />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirm</Form.Label>
              <Form.Control
                type="password"
                ref={passwordConfirmRef}
                placeholder="leave blank to keep the same"
              />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              update
            </Button>
          </Form>
        </Card.Body>
      </Card> */}
      <div className="w-100 text-center mt-2">
        <Link to={'/dashboard'}>cancel</Link>
      </div>
    </main>
  );
};

export default UpdateProfileContent;
