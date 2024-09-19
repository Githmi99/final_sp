// RegisterForm.js
import React from 'react';
import './RegisterForm.css'; // Assuming the CSS file is named RegisterForm.css
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {

  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/dashboard');
  }
 
  return (
    <div className="register-container">
      <div className="register-card">
        <div className="image-container">
          {/* Replace '/path/to/your/image.jpg' with the actual path to your image */}
          <img src="/images/register.jpg" alt="Background" />
        </div>
        <div className="form-container">
          <h2>Register</h2>
          <p>Manage all your inventory efficiently</p>
          <p>Let's get you all set up so you can verify your personal account and begin setting up your work profile.</p>
          <form>
            <div className="form-group">
              <input type="text" placeholder="First name" minLength="8" required />
              <input type="text" placeholder="Last name" minLength="8" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email" required />
              <input type="text" placeholder="Phone no." minLength="8" required />
            </div>
            <div className="form-group">
              <input type="password" placeholder="Password" required />
            </div>
            <div className="form-group">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">I agree to all terms, privacy policies, and fees</label>
            </div>
            <button type="submit" className="sign-up-button"onClick={handleSignUpClick}>Sign up</button>
            </form>
          <p className="login-link">Already have an account? <a href="/login">Log in</a></p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;