import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { signIn, getCurrentUser } from '../lib/auth';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string>('');
  const history = useHistory();

  const handleLogin = async () => {
    try {
      const { data, error } = await signIn(email, password);
      if (error) throw error;
      if (data.user) history.push('/home');
    } catch (err) {
      setError(
        'Failed to sign in: ' +
          (err instanceof Error ? err.message : 'Unknown error')
      );
    }
  };

  useEffect(() => {
    const checkUser = async () => {
      const user = await getCurrentUser();
      if (user) {
        history.push('/home');
        console.log('User is logged in, no need to show login.');
      }
    };
    checkUser();
  }, [history]);

  const LoginForm = () => (
    <>
      <div className={styles.logo}>
        <img src="/icon.png" className={styles.icon} alt="App Logo" />
        <h1 className={styles.title}>Welcome Back</h1>
      </div>
      <div className={styles.form}>
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />

        <input
          type="password"
          value={password}
          placeholder="Your Password"
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />

        <button onClick={handleLogin} className={styles.loginButton}>
          Login
        </button>

        <small style={{ textAlign: 'center', padding: '5px' }}>
          Don't have account yet?{' '}
          <Link to="/register" className={styles.linkButton}>
            Register
          </Link>
        </small>

        {error && <small className={styles.error}>{error} 😭</small>}
      </div>
    </>
  );

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.contentRow}>
          <div className={styles.imageColumn}>
            <img src="/homepage.png" alt="Preview" className={styles.fullImage} />
          </div>
          <div className={styles.formColumn}>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;