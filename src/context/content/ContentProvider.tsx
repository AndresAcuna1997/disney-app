import { useReducer } from 'react';
import { ContentContext } from './contentContext';
import { contentReducer } from './contentReducer';
import { Categories, ContentCategory } from '../../interfaces';

export interface ContentState {
  categories: Categories[] | [];
  selectedCategory: string;
  contentCategory: ContentCategory[] | [];
  contentDetail: ContentCategory;
}

interface Props {
  children: JSX.Element | JSX.Element[];
}

const INITIAL_STATE: ContentState = {
  categories: [],
  contentCategory: [],
  selectedCategory: '',
  contentDetail: {
    title: '',
    description: '',
    tags: [],
    image: ''
  }
};

export const ContentProvider = ( { children }: Props ) => {

  const [ state, dispatch ] = useReducer( contentReducer, INITIAL_STATE );

  const setCategories = ( categories: Categories[] ) => {
    dispatch( { type: 'setCategories', payload: categories } );
  };

  const setContentCategory = ( content: ContentCategory[] ) => {
    dispatch( { type: 'setContentCategory', payload: content } );
  };

  const setSelectedCategory = ( category: string ) => {
    dispatch( { type: 'setSelectedCategory', payload: category } );
  };

  const setContentDetail = ( category: ContentCategory ) => {
    dispatch( { type: 'setContentDetail', payload: category } );
  };

  return (
    <ContentContext.Provider value={ { ...state, setCategories, setContentCategory, setSelectedCategory, setContentDetail } }>
      { children }
    </ContentContext.Provider>
  );
};