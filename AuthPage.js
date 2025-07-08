import React, { useState } from 'react';
import "../AuthPage.css";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login or signup logic
    console.log(`${isLogin ? 'Login' : 'Sign Up'} form submitted`);
    setErrors(Validation(values));
    if(errors.name === "" && errors.email === "" && errors.password === "") {
            axios.post('http://localhost:5000/signup', values)
            .then(res => console.log(res))
            .catch(err => console.log(err));
                navigate('/')
        }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="Enter your name" required />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="auth-button">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <div className="auth-toggle">
          <p>
            {isLogin ? "Don't have an account?" : 'Already have an account?'}
            <span onClick={toggleForm} className="toggle-link">
              {isLogin ? ' Sign Up' : ' Login'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
