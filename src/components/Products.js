import React, { useState, useEffect } from 'react';

const Products = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        console.log('Fetched Products:', data); 
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchProducts(); 
  }, []);

  return (
    <div className="app">
      <h1>Data Fetched from API</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <pre>{JSON.stringify(products, null, 2)}</pre> 
      )}
    </div>
  );
};

export default Products;
