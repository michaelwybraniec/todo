import { signOut } from '../lib/auth'
import { useHistory } from 'react-router-dom'

const SignOutButton = () => {
  const history = useHistory()

  const handleSignOut = async () => {
    try {
      await signOut()
      console.log('User signed out')
      history.push('/login')
    } catch (err) {
      console.error('Failed to sign out:', err)
    }
  }

  return (
    <button onClick={handleSignOut} style={{
      appearance: 'none',
      border: "1px solid #35332d",
      backgroundColor: 'rgb(49, 42, 35)',
      borderRadius: '10px',
      cursor: 'pointer', 
      marginLeft: '10px',
      height: '26px'

     }}>
      Sign Out
    </button>
  )
}

export default SignOutButton