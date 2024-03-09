import { createContext } from 'react';

interface AuthContext {
  status: 'authenticated' | 'not-authenticated';
  handleLogIn: () => void;
  handleLogOut: () => void;
}

export const AuthContext = createContext( {} as AuthContext );