import Item from "./Item";

const ItemList = (props) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{props.greeting}</h2>
      <div className="flex flex-wrap gap-4">
        {props.products.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            text={item.category}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
}

export default ItemList;
