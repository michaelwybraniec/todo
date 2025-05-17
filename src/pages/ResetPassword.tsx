import { useEffect, useState } from 'react'
import { useIonRouter } from '@ionic/react'
import { supabase } from '../lib/supabase'
import styles from './Register.module.css' // reuse Register styles

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useIonRouter()

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'PASSWORD_RECOVERY' && session) {
        console.log('Recovery session:', session)
      }
    })
  }, [])

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')
    setError('')

    const { error } = await supabase.auth.updateUser({ password: newPassword })

    if (error) {
      setError('❌ Error resetting password: ' + error.message)
    } else {
      setMessage('✅ Password updated successfully! Redirecting to login...')
      setTimeout(() => {
        router.push('/login')
      }, 2000)
    }

    setLoading(false)
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Reset Your Password</h1>

        <form className={styles.form} onSubmit={handleResetPassword}>
          <input
            type="password"
            placeholder="Enter new password"
            required
            minLength={8}
            maxLength={20}
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            className={styles.input}
          />

          <button
            type="submit"
            className={styles.registerButton}
            disabled={loading}
          >
            {loading ? 'Updating...' : 'Update Password'}
          </button>
        </form>

        {error && <p className={styles.error}>{error}</p>}
        {message && <p className={styles.success}>{message}</p>}
      </div>
    </div>
  )
}