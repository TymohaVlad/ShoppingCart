import { useState, useEffect } from 'react';
import ProductsCards from './ProductsCards';
import ApiClient from '../ApiClient';
import { Product } from '../Product';

import './ProductsCards.css'

function GetProduct(): JSX.Element {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string>('');

  const apiClient = new ApiClient();

  useEffect(() => {
    apiClient
      .fetch('/products')
      .then((response) => response.json())
      .then((prod) => setProducts(prod))
      .catch((error) => setError(error.message));
  }, []);

  if (error) {
    return <span className="error__text">Error: {error}</span>;
  }

  return (
    <section className="product__carsd">
      <div className="cards__container">
        {products.map((product: Product) => (
          <ProductsCards key={product.id} {...product}  />
        ))}
      </div>
    </section>
  );
}

export default GetProduct;
