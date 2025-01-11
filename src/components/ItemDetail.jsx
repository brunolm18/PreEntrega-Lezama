import ItemCount from "./ItemCount";

const ItemDetail = (props) => {
  const { price, title, description, text, img, stock } = props;

  const onSubmitCount = (count) => {
    console.log(`Agregaste ${count} unidades al carrito`);
  }

  return (
    <div className="max-w-lg rounded overflow-hidden shadow-lg bg-white p-6 mx-auto mt-10">
      <img src={img} alt={`${title} image`} className="w-full h-64 object-cover mb-4"/>
      <div className="px-6 py-4">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 text-base mb-4">{text}</p>
        <p className="text-gray-900 font-bold text-xl mb-2">$ {price}</p>
        <p className="text-gray-600 mb-4">{description}</p>
        <ItemCount onSubmitCount={onSubmitCount} max={stock} />
      </div>
    </div>
  );
}

export default ItemDetail;
