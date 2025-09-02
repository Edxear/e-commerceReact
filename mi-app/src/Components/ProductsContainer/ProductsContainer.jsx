
import './ProductsContainer.css';

const ProductsContainer = ({ children }) => {
  return (
    <div className="products-container">
      <div className="products-content">
        {children}
      </div>
    </div>
  );
};

export default ProductsContainer;