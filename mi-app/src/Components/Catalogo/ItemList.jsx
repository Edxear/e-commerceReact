import Item from './Item';

const ItemList = ({ products }) => {
  return (
    <div className="item-list">
      {products.map(product => (
        <Item 
          key={product.id} 
          id={product.id}
          title={product.title}
          price={product.price}
          pictureUrl={product.image}
        />
      ))}
    </div>
  );
};

export default ItemList;