import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signUp } from '../lib/auth';
import styles from './Register.module.css'; // import CSS module
import { Link } from 'react-router-dom';

const Register = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = async () => {
    setError('');
    setSuccess('');
    try {
      const { error } = await signUp(email, password);
      if (error) throw error;

      setSuccess(
        '✅ Registration successful! Check your email to confirm your account.'
      );
    } catch (err) {
      setError(
        '❌ Failed to register: ' +
          (err instanceof Error ? err.message : 'Unknown error')
      );
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Register</h1>

        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            handleRegister();
          }}
        >
          <input
            type='email'
            placeholder='Email'
            required
            minLength={5}
            maxLength={50}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />

          <input
            type='password'
            placeholder='Create Password'
            required
            minLength={8}
            maxLength={20}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />

          <button type='submit' className={styles.registerButton}>
            Register
          </button>

          <small style={{ textAlign: 'center', padding: '5px' }}>
            Already have account?{' '}
            <Link to='/login' className={styles.linkButton}>
              Login
            </Link>
          </small>
        </form>

        {error && <p className={styles.error}>{error}</p>}
        {success && (
          <>
            <p className={styles.success}>{success}</p>
            <button
              onClick={() => history.push('/login')}
              className={styles.loginButton}
            >
              Go to Login
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Register;
