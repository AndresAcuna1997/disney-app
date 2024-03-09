import { createContext } from 'react';
import { Categories, ContentCategory } from '../../interfaces';

interface ContentContext {
  categories: Categories[];
  selectedCategory: string;
  contentCategory: ContentCategory[] | [];
  contentDetail: ContentCategory;
  setCategories: ( categories: Categories[] ) => void;
  setContentCategory: ( content: ContentCategory[] ) => void;
  setSelectedCategory: ( content: string ) => void;
  setContentDetail: ( category: ContentCategory ) => void;
}

export const ContentContext = createContext( {} as ContentContext );