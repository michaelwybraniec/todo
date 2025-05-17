import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { supabase } from '../lib/supabase'; // adjust path if needed
import styles from './Register.module.css'; // reuse the same CSS module
import { Link } from 'react-router-dom';

const Reset = () => {
  const history = useHistory();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handlePasswordUpdate = async () => {
    setError('');
    setSuccess('');
    try {
      const { error } = await supabase.auth.updateUser({ password });
      if (error) throw error;

      setSuccess('✅ Password updated successfully!');
    } catch (err) {
      setError(
        '❌ Failed to update password: ' +
          (err instanceof Error ? err.message : 'Unknown error')
      );
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Update Password</h1>

        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            handlePasswordUpdate();
          }}
        >
          <input
            type='password'
            placeholder='Enter new password'
            required
            minLength={8}
            maxLength={50}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />

          <button type='submit' className={styles.registerButton}>
            Update Password
          </button>

          <small style={{ textAlign: 'center', padding: '5px' }}>
            Remembered your password?{' '}
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

export default Reset;