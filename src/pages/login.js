import { useState } from 'react';
import styles from '../styles/login.module.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log('Logging in with:', { username, password });
  };

  return (
    <div className={styles["login-container"]}>
  <h1>Login</h1>
  <form onSubmit={handleSubmit}>
    <div className={styles["form-group"]}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
    </div>
    <div className={styles["form-group"]}>
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
    </div>
    <button type="submit" class="submit-button">Submit</button>
  </form>
  <div className={styles["link"]}>
    <p><a href="/forgot-password">Forgot Password?</a></p>
    <p>Don't have an account? <a href="/register">Register</a></p>
  </div>
</div>

  );
};

export default Login;
