import { AuthState } from './AuthProvider';

type AuthAction =
  | { type: 'login'; }
  | { type: 'logout'; };

export const authReducer = ( state: AuthState, action: AuthAction ): AuthState => {
  switch ( action.type ) {
    case 'login':
      return { ...state, status: 'authenticated' };
    case 'logout':
      return { ...state, status: 'not-authenticated' };
    default:
      return state;
  }
};