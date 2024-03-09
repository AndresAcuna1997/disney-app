import { useContext, useEffect, useState } from 'react';
import { ContentContext } from '../context/content/contentContext';
import { ContentCategory } from '../interfaces/contentCategory.interface';

export const useContentCategory = () => {

  const { selectedCategory, setContentCategory } = useContext( ContentContext );
  const [ isLoading, setisLoading ] = useState( false );

  useEffect( () => {
    if ( selectedCategory.length > 1 ) {
      fetchMockData();
    }
  }, [ selectedCategory ] );

  const fetchMockData = async () => {

    try {

      setisLoading( true );

      const res = await fetch( '/mock/contentMock.json', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      } );

      const { categories } = await res.json();

      const [ data ] = categories.filter( ( category: { name: string; content: ContentCategory; } ) => category.name === selectedCategory );

      const { content } = data;

      setContentCategory( content );

    } catch ( error ) {
      throw new Error( 'Error fetching the data' );
    }

    setisLoading( false );


  };



  return { isLoading };
};