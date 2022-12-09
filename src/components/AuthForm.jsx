import React from 'react';
import { authenticateUser } from '../api/auth';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../api/apiHelper';

const AuthForm = ({ name, buttonName }) => {
  const navigate = useNavigate();
  
  const handleSubmit = (event) => {
    event.preventDefault();

    const formName = event.target.name;
    const username = event.target.username.value;
    const password = event.target.password.value;

    if (!username || !password || password.length < 6) {
      console.log('Either no input or password too short');
      return;
    }

    // If the user uses the login form, we use authenticateUser()
    if (formName === 'login') {
      authenticateUser(username, password);
    }
    // If the user uses the register form, we use registerUser()
    else if (formName === 'register') {
      registerUser(username, password);
    }
    const isLoggedIn = window.localStorage.getItem('strange-token');

    if(isLoggedIn)
    {
      console.log('time to redirect');
      navigate('/');
    }
  };

  return (
    <div id="auth-form">
      <form onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor='username'>Username</label>
          <input type='text' name='username' />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input type='text' name='password' />
        </div>
        <button>{buttonName}</button>
      </form>
      {name === 'login' ? (
        <p>
          Not a user yet? <Link to='/signup'>Sign Up Here</Link>!
        </p>
      ) : (
        <p>
          Already have an account? <Link to='/login'>Login Here</Link>!
        </p>
      )}
    </div>
  );
};

// export const LoginAuth = () => { return (<AuthForm name={'login'} buttonName={'Login'} />) };
// export const SignupAuth = () => { return (<AuthForm name={'register'} buttonName={'Register'} />) };

export default AuthForm;