import { useContext } from 'react';
import { ContentContext } from '../context/content/contentContext';

interface Props {
  title: string;
  image: string;
}

export const CategoryCard = ( { image, title }: Props ) => {

  const { setSelectedCategory } = useContext( ContentContext );

  return (
    <div
      onClick={ () => setSelectedCategory( title ) }
      className="group cursor-pointer flex border-2 border-slate-400 w-1/5 h-40 rounded-xl bg-slate-500 hover:bg-slate-400 transition-colors ease-in-out shadow-sm drop-shadow-lg shadow-white">
      <div className="flex-1 bg-slate-100 overflow-hidden rounded-lg flex items-center justify-center">
        <img
          src={ `./${ image }.png` }
          alt={ image }
          className="h-auto w-10/12 group-hover:scale-110 transition-transform ease-in-out"
          loading="lazy"
        />
      </div>
    </div>
  );
};