import { useState } from "react";

const Button = (props) => {
  const { color, disabled, children, handleClick } = props;
  const [isDisabled, setIsDisabled] = useState(disabled);
  const [colorState, setColorState] = useState(color);

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 text-white rounded ${isDisabled ? 'bg-gray-500 cursor-not-allowed' : `bg-${colorState}-500`}`}
      disabled={isDisabled}
    > 
      {children}
    </button>
  );
}

export default Button;
