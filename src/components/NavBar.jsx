import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="bg-blue-700 text-white p-5 w-full flex justify-between items-center">
      <div className="text-2xl font-bold">TecnologyWord</div>
      <ul className="flex space-x-8">
        <li>
          <NavLink exact to="/" className="hover:text-yellow-300 hover:scale-110 hover:animate-pulse px-4 py-2 rounded transition-all">
            Homepage
          </NavLink>
        </li>
       
        <li>
          <NavLink to="/category/celulares" className="hover:text-yellow-300 hover:scale-110 hover:animate-pulse px-4 py-2 rounded transition-all">
            Celulares
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/computadoras" className="hover:text-yellow-300 hover:scale-110 hover:animate-pulse px-4 py-2 rounded transition-all">
            Computadoras
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/tablets" className="hover:text-yellow-300 hover:scale-110 hover:animate-pulse px-4 py-2 rounded transition-all">
            Tablets
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/smartwatch" className="hover:text-yellow-300 hover:scale-110 hover:animate-pulse px-4 py-2 rounded transition-all">
            Smartwatch
          </NavLink>
        </li>
        <li>
          <a href="https://www.instagram.com/" className="hover:text-yellow-300 hover:scale-110 hover:animate-pulse px-4 py-2 rounded transition-all">
            Nuestras redes
          </a>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
