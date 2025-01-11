const CartWidget = () => {
  return (
    <div className="relative inline-block">
      <span className="text-2xl">🛒</span>
      <span className="absolute top-0 right-0 rounded-full bg-red-500 text-white text-xs px-2">1</span>
    </div>
  );
}

export default CartWidget;

