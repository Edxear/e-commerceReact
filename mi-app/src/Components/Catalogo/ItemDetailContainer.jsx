import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { mockApi } from '../../Services/mockAPI';
import Detail from './Detail';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await mockApi.getProductById(id);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div>Cargando producto...</div>;
  if (!product) return <div>Producto no encontrado</div>;

  return (
    <div className="item-detail-container">
      <Detail product={product} />
    </div>
  );
};

export default ItemDetailContainer;