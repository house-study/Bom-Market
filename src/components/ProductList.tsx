import axios from 'axios';
import { useState, useEffect } from 'react';

import Product from '@/components/Product';

interface ProductType {
  id: number;
  imageURL: string;
  productName: string;
  description: string;
  price: number;
}

export default function ProductList() {
  const URL = 'http://localhost:3001';

  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    axios
      .get(`${URL}/products`)
      .then(res => setProducts(res.data))
      .catch(console.error);
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {products.map(product => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
}
