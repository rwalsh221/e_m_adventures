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

export default Login;
