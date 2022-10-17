import React from 'react';
import { Link } from 'react-router-dom';
import classes from './ErrorContent.module.css';

const ErrorContent = () => (
  <main className={classes.main_error}>
    <h1>an error has occured</h1>
    <Link to="/">Return Home</Link>
  </main>
);

export default ErrorContent;
