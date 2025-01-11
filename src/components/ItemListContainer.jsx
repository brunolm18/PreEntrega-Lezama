import getAsyncData, { getAsyncItemsByCategory } from "../data/getAsyncData";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const { catid } = useParams();

  useEffect(() => {
    if (catid === undefined) {
      const respuestaPromise = getAsyncData();
      respuestaPromise
        .then((respuesta) => setProducts(respuesta))
        .catch((error) => alert(error));
    } else {
      const respuestaPromise = getAsyncItemsByCategory(catid);
      respuestaPromise
        .then((respuesta) => setProducts(respuesta))
        .catch((error) => alert(error));
    }
  }, [catid]);

  return (
    <div className="p-4">
      <ItemList greeting={props.greeting} products={products} />
    </div>
  );
}

export default ItemListContainer;
