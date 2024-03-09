import { useContext } from 'react';
import { ContentCategory } from '../interfaces';
import { ContentContext } from '../context/content/contentContext';

interface Props {
  item: ContentCategory;
}

export const ContentCategoryCard = ( { item }: Props ) => {

  const { setContentDetail } = useContext( ContentContext );

  return (
    <div
      onClick={ () => setContentDetail( item ) }
      className="group relative w-1/4 h-56 bg-slate-50 rounded-md overflow-hidden">
      <img
        className="w-full h-56 object-cover"
        src={ item.image ? item.image : "https://media.nomadicmatt.com/colombiaguide.jpg" }
        alt={ item.title }
      />

      <div className="absolute px-4 py-3 flex items-center justify-between gap-2 bottom-0 left-0 bg-gradient-to-t  from-black w-full translate-y-16 opacity-0 group-hover:opacity-100 group-hover:-translate-y-0 transition-all ease-in-out">
        <h4 className="font-semibold text-white text-xl">{ item.title }</h4>

        <div className="flex gap-2 justify-end">
          <button className="rounded-3xl px-3 py-2 text-white bg-black bg-opacity-40 border border-white hover:bg-opacity-85 hover:font-semibold hover:rounded-lg transition-all ease-in-out">Watch</button>
          <button className="rounded-3xl px-3 py-2 text-white bg-black bg-opacity-40 border border-white hover:bg-opacity-85 hover:font-semibold hover:rounded-lg transition-all ease-in-out">See More</button>
        </div>
      </div>
    </div>
  );
};