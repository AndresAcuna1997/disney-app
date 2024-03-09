import { useReducer } from 'react';
import { authReducer } from './authReducer';
import { AuthContext } from './authContext';


export interface AuthState {
  status: 'authenticated' | 'not-authenticated';
}

const INITIAL_STATE: AuthState = {
  status: 'not-authenticated'
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const AuthProvider = ( { children }: Props ) => {

  const [ state, dispacth ] = useReducer( authReducer, INITIAL_STATE );

  const handleLogIn = () => {
    dispacth( { type: 'login' } );
  };
  const handleLogOut = () => {
    dispacth( { type: 'logout' } );
  };

  return (
    <AuthContext.Provider value={ { ...state, handleLogIn, handleLogOut } }>
      { children }
    </AuthContext.Provider>
  );
};