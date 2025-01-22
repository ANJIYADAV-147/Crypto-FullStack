import React, { useState } from 'react';
import { Link,Navigate } from 'react-router-dom';
import logo from '../images/logo.jpg';
import Cookies from 'js-cookie'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './index.css';

const LoginPage = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const [showSubmitError, setShowSubmitError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const onChangeUsername = event => {
    setUsername(event.target.value);
  };

  const onChangePassword = event => {
    setPassword(event.target.value);
  };

  const onSubmitFailure = (errorMsg) => {
    setShowSubmitError(true);
    setErrorMsg(errorMsg);
  };

  const navigate=useNavigate();

  const handleClosePopup = () => {
    if (onClose) {
      onClose();
    }
  };


  const onSubmitSuccess = (jwtToken) => {
    Cookies.set('jwt_token',jwtToken,{expires:30})
    navigate('/')
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userDetails = { username, password };  // Make sure to include email

    const url = 'https://cryptocurrnecy.onrender.com/login';

    try {
        // Wait for the response from axios
        const response = await axios.post(url, userDetails, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // Log the response after the promise resolves
        console.log(response);

        const data = response.data;
        console.log(data);

        // Check if the login is successful
        if (data.message === 'Login successful') {
            onSubmitSuccess(data.jwt_token);  // Call success callback
        } else {
            onSubmitFailure(data.message);  // Show the error message from the backend
        }
    } catch (error) {
        console.error('Login failed:', error);
        onSubmitFailure("An error occurred while trying to log in.");
    }
};


  const renderPasswordField = () => (
    <>
      <label className="input-label" htmlFor="password">
        PASSWORD
      </label>
      <input
        type="password"
        id="password"
        className="password-input-field"
        value={password}
        onChange={onChangePassword}
        placeholder="Password"
      />
    </>
  );

  const renderUsernameField = () => (
    <>
      <label className="input-label" htmlFor="username">
        USERNAME
      </label>
      <input
        type="text"
        id="username"
        className="username-input-field"
        value={username}
        onChange={onChangeUsername}
        placeholder="Username"
      />
    </>
  );

  const jwtToken=Cookies.get('jwt_token')
  if(jwtToken!==undefined){
    return <Navigate to='/'/>
  }

  return (
    <div className="popup-container">
      <div className="popup">
        
        <form className="form-container" onSubmit={handleSubmit}>
          <img
            src={logo}
            className="login-website-logo-desktop-img"
            alt="website logo"
          />
          <div className="input-container">{renderUsernameField()}</div>
          <div className="input-container">{renderPasswordField()}</div>
          
            <button type="submit" className="login-button" onClick={handleClosePopup}>
              Login
            </button>
            <p>Don't have an account? <Link to="/signup">Signup</Link></p>
            {showSubmitError && <p className="error-message">{errorMsg}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginPage
