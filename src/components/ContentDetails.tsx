import { useContext } from 'react';
import { ContentContext } from '../context/content/contentContext';

export const ContentDetails = () => {

  const { contentDetail } = useContext( ContentContext );
  const { title, description, tags, image } = contentDetail;

  return (
    <div className="flex gap-4 h-96 p-4 bg-black bg-opacity-60 text-white ">
      <img
        className="h-full w-2/5 object-cover rounded-md"
        src={ image ? image : "https://media.nomadicmatt.com/colombiaguide.jpg" }
        alt="a"
      />

      <div className='flex flex-col justify-between  w-3/5'>
        <div>
          <h1 className="font-bold text-5xl">{ title }</h1>
          <p className="text-xl mt-2">{ description }</p>
          <div className="flex gap-2 mt-4">
            {
              tags.map( ( tag: string ) => (
                <span className="rounded-3xl text-base px-3 py-1 text-white bg-transparent border border-white">{ tag }</span>
              ) )
            }
          </div>
        </div>

        <div>
          <div className="text-2xl flex gap-4 items-center">
            <p>Share on: </p>
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-solid fa-share-nodes"></i>
          </div>

          <div className="flex gap-4 mt-2">
            <button className="rounded-3xl text-xl px-4 py-2 text-white bg-black bg-opacity-40 border border-white hover:bg-opacity-85 font-medium hover:font-semibold hover:rounded-lg transition-all ease-in-out">
              <i className="fa-solid fa-play mr-2"></i>
              Watch
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};