import { useContext } from 'react';
import DisneyLogo from "../assets/disney--1.svg";
import { AuthContext } from '../context/auth/authContext';

const navLinks = [ {
  text: 'Favorites',
  icon: 'fa-solid fa-star',
  path: '/favorites'
},
{
  text: 'Movies',
  icon: 'fa-solid fa-tape',
  path: '/movies'
},
{
  text: 'Series',
  icon: 'fa-solid fa-tv',
  path: '/series'
},
{
  text: 'New',
  icon: 'fa-solid fa-wand-magic-sparkles',
  path: '/new'
} ];

export const NavBar = () => {

  const { handleLogOut } = useContext( AuthContext );

  return (
    <nav className="bg-black">
      <div className="w-full flex flex-wrap items-center justify-between py-2 px-6">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={ DisneyLogo } className="h-14" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Disney + App</span>
        </a>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

            {
              navLinks.map( ( navItem ) => (
                <li key={ navItem.path }>
                  <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    <i className={ navItem.icon }></i>
                    <span className="ml-1">{ navItem.text }</span>
                  </a>
                </li>
              ) )
            }

            <li >
              <a  
              onClick={handleLogOut}
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
                <span className="ml-1">Log Out</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>


  );
};