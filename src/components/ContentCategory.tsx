import { useContext } from 'react';
import { ContentCategoryCard } from './ContentCategoryCard';
import { ContentContext } from '../context/content/contentContext';

export const ContentCategory = () => {

  const { contentCategory } = useContext( ContentContext );

  return (
    <>
      <h1 className="font-bold text-3xl my-4 text-white">Recommended</h1>

      <div className="flex mt-4 gap-4">
        {/*Category Cards*/ }
        {
          contentCategory.map( ( item ) => (
            < ContentCategoryCard
              key={ item.title }
              item={ item }
            />
          ) )
        }
      </div>


    </>
  );
};