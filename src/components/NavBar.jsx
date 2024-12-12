import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className=" container bg-blue-700 text-white p-5  w-full flex justify-between  items-center mt-">
      <div className="text-xl font-bold">TecnologyWord</div>
      <ul className="flex space-x-36">
        <li className="hover:scale-110 hover:animate-pulse px-4 py-2 rounded transition-all">Celulares</li>
        <li className="hover:scale-110 hover:animate-pulse px-4 py-2 rounded transition-all">Computadoras</li>
        <li className="hover:scale-110 hover:animate-pulse px-4 py-2 rounded transition-all">Tablets</li>
        <li className="hover:scale-110 hover:animate-pulse px-4 py-2 rounded transition-all">Smartwatch</li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
