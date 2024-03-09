import { ContentState } from './ContentProvider';
import { Categories } from '../../interfaces/categories.interface';
import { ContentCategory } from '../../interfaces';

type ContentAction =
  | { type: 'setCategories', payload: Categories[]; }
  | { type: 'setSelectedCategory', payload: string; }
  | { type: 'setContentCategory', payload: ContentCategory[]; }
  | { type: 'setContentDetail', payload: ContentCategory; };

export const contentReducer = ( state: ContentState, action: ContentAction ): ContentState => {
  switch ( action.type ) {
    case 'setCategories':
      return { ...state, categories: action.payload };
    case 'setSelectedCategory':
      return {
        ...state, 
        selectedCategory: action.payload, 
        contentDetail: {
          title: '',
          description: '',
          image: '',
          tags: []
        }
      };
    case 'setContentCategory':
      return { ...state, contentCategory: action.payload };
    case 'setContentDetail':
      return { ...state, contentDetail: action.payload };
    default:
      return state;
  }
};