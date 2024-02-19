import React, { useState } from 'react';
import './Login.css';



const LoginForm = ({ setUser }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (!storedUser || formData.username !== storedUser.username || formData.password !== storedUser.password) {
      alert('Invalid username or password');
      return;
    }

    setUser(storedUser);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>
        Username:
        <input type="text" name="username" value={formData.username} onChange={handleChange} required />
      </label>
      <label>
        Password:
        <input type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={handleChange} required />
        <button type="button" onClick={togglePasswordVisibility}>
        {showPassword ? 'Hide' : 'Show'}
      </button>
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
