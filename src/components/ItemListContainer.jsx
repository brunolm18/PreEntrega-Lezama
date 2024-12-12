import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="p-2 bg-gray-100 border border-gray-50 rounded- w-full max-w-4xl mx-auto flex justify-center">
      <h2 className="text-xl font-semibold">{greeting}</h2>
    </div>
  );
}

export default ItemListContainer;
