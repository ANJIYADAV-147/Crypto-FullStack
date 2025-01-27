import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios'
import './index.css';

const SignupPage = ({ onClose }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { username, email, password } = formData;
    const newErrors = {};
    if (!username) newErrors.username = 'Username is required';
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        console.log(formData)
        const response = await axios.post('http://localhost:5000/signup', formData);
        console.log(response.data);
        navigate('/login');
      } catch (error) {
        console.error('Error during signup request:', error.response?.data || error.message);
        setErrors({ ...errors, submit: 'An error occurred during signup. Please try again.' });
      }
    }
  };

  return (
    <div className='popup-signup-container'>
      <div className='signup-popup'>
        
        <div className='signUp-component'>
          <div className="signup-container">
            <h2 className='sign-heading'>Sign Up</h2>
            <form className="signup-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
                {errors.username && <p className="error-text">{errors.username}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="error-text">{errors.email}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && <p className="error-text">{errors.password}</p>}
                <p className='signup-des'>By creating an account, you agree to the Terms of Service and Privacy Policy.</p>
              </div>

              <button className='signup-button' type="submit">Sign Up</button>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
