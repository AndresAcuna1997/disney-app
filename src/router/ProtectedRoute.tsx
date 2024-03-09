import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../context/auth/authContext';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const ProtectedRoute = ( { children }: Props ) => {

  const navigate = useNavigate();
  const { status } = useContext( AuthContext );

  useEffect( () => {
    if ( status === 'not-authenticated' ) {
      navigate( '/login' );
    }
  }, [ navigate, status ] );


  return ( children );
};