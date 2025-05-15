import { useEffect, useState } from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'
import { getCurrentUser } from '../lib/auth'

interface PrivateRouteProps extends RouteProps {
  component: React.ComponentType<object>
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  const [loading, setLoading] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    const checkAuth = async () => {
      const user = await getCurrentUser()
      setAuthenticated(!!user)
      setLoading(false)
    }
    checkAuth()
  }, [])

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  )
}