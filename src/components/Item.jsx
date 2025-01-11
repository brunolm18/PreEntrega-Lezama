import { Link } from "react-router-dom";
import Button from "./Button";

const Item = (props) => {
  const { price, title, text, img, id } = props;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
      <img src={img} alt={`${title} image`} className="w-full h-48 object-cover mb-4"/>
      <div className="px-6 py-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 text-base">{text}</p>
        <p className="text-gray-900 font-bold text-xl mt-2">$ {price}</p>
        <Link to={`/item/${id}`}>
          <Button>Ver Detalle</Button>
        </Link>
      </div>
    </div>
  );
}

export default Item;
