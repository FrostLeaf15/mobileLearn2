import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/login.module.css';

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Menghentikan pengiriman formulir secara otomatis
    if (username === 'username' && password === 'password') {
      router.push('/menu'); // Redirect ke halaman menu jika login berhasil
    } else {
      setError('Username atau password tidak sesuai'); // Tampilkan pesan kesalahan jika login gagal
    }
  };

  return (
    <div className={styles["login-container"]}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles["form-group"]}>
          <label htmlFor="username">Username</label>
          <input
            className={styles["input"]}
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="password">Password</label>
          <input
            className={styles["input"]}
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
      <div>
        <a href="#">Forgot Password</a>
      </div>
      <div>
        <p>Belum punya akun? <a href="#">Register</a></p>
      </div>
    </div>
  );
};

export default Login;
