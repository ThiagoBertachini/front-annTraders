import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct, id]); // Incluímos fetchProduct e id no array de dependências

  return (
    <div>
      <h2>Product Detail</h2>
      {product && (
        <div>
          <p>Name: {product.name}</p>
          <p>Price: {product.price}</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;