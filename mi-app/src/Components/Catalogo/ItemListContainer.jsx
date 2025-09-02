import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { mockApi } from '../../Services/mockAPI';
import ProductsContainer from '../ProductsContainer/ProductsContainer';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let data;
        if (categoryId) {
          data = await mockApi.getProductsByCategory(categoryId);
        } else {
          data = await mockApi.getProducts();
        }
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  if (loading) return <div>Cargando productos...</div>;

  return (
    <div className="item-list-container">
      <h2>{categoryId ? `Productos de ${categoryId}` : 'Todos nuestros productos'}</h2>
      <ProductsContainer>
        <ItemList products={products} />
      </ProductsContainer>
    </div>
  );
};

export default ItemListContainer;