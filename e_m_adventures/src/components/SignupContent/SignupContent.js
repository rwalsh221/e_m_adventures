import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

import classes from './SignupContent.module.css';

const Signup = () => {
  const database =
    'https://e-m-adventures-development-default-rtdb.europe-west1.firebasedatabase.app/';

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const { signup, currentUser } = useAuth();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value).then(
        (newUser) => {
          axios.patch(`${database}users.json`, {
            [newUser.user.uid]: {
              email: newUser.user.email,
              uid: newUser.user.uid,
              role: 'user',
              booking: { checkin: '1', checkOut: '1' },
            },
          });
        }
      );

      history.push('./dashboard');
    } catch {
      setError('Failed to create an account');
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <main className={classes.signup}>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign UP</h2>
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
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirm</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        already have an account? <Link to={'/login'}>Log in</Link>
      </div>
    </main>
  );
};

export default Signup;
