import { useState } from 'react';
import { supabase } from '../lib/supabase'; // adjust the path if needed
import styles from './Register.module.css'; // reuse your existing styles
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleRequestReset = async () => {
    setError('');
    setMessage('');

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: 'http://localhost:3000/reset-password', // Change to your production domain
      });

      if (error) throw error;

      setMessage('✅ Check your email for a password reset link.');
    } catch (err) {
      setError(
        '❌ Failed to send reset email: ' +
          (err instanceof Error ? err.message : 'Unknown error')
      );
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Forgot your password?</h1>

        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            handleRequestReset();
          }}
        >
          <input
            type='email'
            placeholder='Enter your email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />

          <button type='submit' className={styles.registerButton}>
            Send Reset Link
          </button>

          <small style={{ textAlign: 'center', padding: '5px' }}>
            Remembered your password?{' '}
            <Link to='/login' className={styles.linkButton}>
              Login
            </Link>
          </small>
        </form>

        {error && <p className={styles.error}>{error}</p>}
        {message && <p className={styles.success}>{message}</p>}
      </div>
    </div>
  );
};

export default ForgotPassword;