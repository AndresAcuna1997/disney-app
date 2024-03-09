import { useContext } from 'react';
import { CategoryCard, ContentCategory, ContentDetails, Loading, NavBar } from '../components';
import { ContentContext } from '../context/content/contentContext';
import { useCategories, useContentCategory } from '../hooks';

export const HomePage = () => {
  const { categories, contentCategory, contentDetail } = useContext( ContentContext );
  const { isLoading: isLoagingCategories } = useCategories();
  const { isLoading: isLoadingContent } = useContentCategory();

  return (
    <>
      <header>
        <NavBar />
      </header>

      <main className="w-full h-screen px-20 py-10 bg-gradient-to-b from-slate-950 via-slate-800 to-slate-600">

        {/* Categories */ }
        <section className="flex gap-3">
          {
            !isLoagingCategories ? (
              categories?.map( ( { name } ) => (
                <CategoryCard key={ name } title={ name } image={ name } />
              ) )
            ) : ( null )
          }
        </section>

        {/* Content Category */ }
        <section className={ `my-5 ${ contentCategory.length > 0 ? ' border-t-2 border-white' : '' }` }>
          {
            ( contentCategory.length <= 0 )
              ?
              (
                <div className="flex flex-col gap-4 h-96 justify-center items-center  text-white">
                  <h1 className="text-3xl">Please select a category</h1>
                  <i className="text-8xl fa-regular fa-hand-pointer"></i>
                </div>
              )
              :
              ( isLoadingContent )
                ?
                (
                  <Loading />
                )
                :
                (
                  <>
                    <h1 className="font-bold text-3xl my-4 text-white">Recommended</h1>
                    <ContentCategory />
                  </>
                )
          }
        </section>

        {/* Content Details Category */ }
        <section className="mt-4">
          {
            contentDetail.title ? ( <ContentDetails /> ) : null
          }
        </section>

      </main >

      <footer className="bg-black text-center text-white py-4">
        Product in development
      </footer>
    </>
  );
};