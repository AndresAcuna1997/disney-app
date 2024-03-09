import { useContext, useEffect, useState } from 'react';
import { ContentContext } from '../context/content/contentContext';

export const useCategories = () => {
  const [ isLoading, setIsLoading ] = useState( true );

  const { setCategories: setReducerCategories } = useContext( ContentContext );

  const fetchMockData = async () => {

    try {
      const res = await fetch( '/mock/categoriesMock.json', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      } );

      const { categories } = await res.json();
      setReducerCategories( categories );

      setIsLoading( false );
    } catch ( error ) {
      throw new Error( 'Error fetching the data' );
    }

  };

  useEffect( () => {
    fetchMockData();
  }, [] );

  return {
    isLoading
  };
};