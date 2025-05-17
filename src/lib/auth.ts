import { supabase } from './supabase';

export const signIn = (email: string, password: string) => {
  return supabase.auth.signInWithPassword({ email, password });
};

export const signUp = (email: string, password: string) => {
  return supabase.auth.signUp({ email, password });
};

export const signOut = () => {
  return supabase.auth.signOut();
};

export const getCurrentUser = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
};

export const isAuthenticated = async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  return session !== null;
};

export const resetPassword = (email: string) => {
  const basePath = import.meta.env.BASE_URL || '/';
  const redirectUrl = `${window.location.origin}${basePath}reset-password`;

  return supabase.auth.resetPasswordForEmail(email, {
    redirectTo: redirectUrl,
  });
};