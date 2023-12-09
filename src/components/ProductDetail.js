import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  // Utilize useCallback para evitar a recriação da função a cada renderização
  const fetchProduct = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:8080/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  }, [id]); // id é a única dependência, já que fetchProduct é agora uma função memoizada

  useEffect(() => {
    // Chame a função fetchProduct dentro do useEffect
    fetchProduct();
  }, [fetchProduct]); // Agora, fetchProduct é a única dependência

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