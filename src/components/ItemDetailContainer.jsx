import { useState, useEffect } from "react";
import { getAsyncItemById } from "../data/getAsyncData";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      const data = await getAsyncItemById(id);
      setProduct(data);
    };

    getProduct();
  }, [id]);

  return (
    <div className="p-4">
      <ItemDetail {...product} />
    </div>
  );
}

export default ItemDetailContainer;
