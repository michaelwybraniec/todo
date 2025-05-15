import { supabase } from './supabase'

export const signIn = (email: string, password: string) => {
  return supabase.auth.signInWithPassword({ email, password })
}

export const signUp = (email: string, password: string) => {
  return supabase.auth.signUp({ email, password })
}

export const signOut = () => {
  return supabase.auth.signOut()
}

export const getCurrentUser = async () => {
  const { data: { user } } = await supabase.auth.getUser()
  return user
}

export const isAuthenticated = async () => {
  const { data: { session } } = await supabase.auth.getSession()
  return session !== null
}