import { useState } from "react";

const ItemCount = (props) => {
  const [count, setCount] = useState(1);

  const handleAdd = () => {
    if (count === props.max) return;
    setCount(count + 1);
  };

  const handleSubstract = () => {
    if (count === 1) return;
    setCount(count - 1);
  };

  const handleClick = () => {
    props.onSubmitCount(count);
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center space-x-2 mb-4">
        <button onClick={handleAdd} className="px-4 py-2 bg-blue-500 text-white rounded">+</button> 
        <span className="text-xl">{count}</span>
        <button onClick={handleSubstract} className="px-4 py-2 bg-blue-500 text-white rounded">-</button>
      </div>
      <button onClick={handleClick} className="px-4 py-2 bg-green-500 text-white rounded">Agregar al carrito</button>
    </div>
  ); 
}

export default ItemCount;
