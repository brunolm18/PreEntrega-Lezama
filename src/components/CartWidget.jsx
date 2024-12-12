import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  return (
    <div className="flex items-center space-x-2 text-white">
      <FaShoppingCart className="text-2xl" />
      <span className="bg-gray-600 text-white text-sm rounded-full px-2">1</span>
    </div>
  );
}

export default CartWidget;
