import { useContext } from 'react';
import { ContentCategoryCard } from './ContentCategoryCard';
import { ContentContext } from '../context/content/contentContext';

export const ContentCategory = () => {

  const { contentCategory } = useContext( ContentContext );

  return (
    <>
      <div className="flex mt-4 gap-4 overflow-auto">
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