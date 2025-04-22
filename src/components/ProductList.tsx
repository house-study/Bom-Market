import { useState, useEffect } from 'react';

import Product from '@/components/Product';

import { ProductType } from '@/types/product';
import { getProducts } from '@/api/apiRequest';

export default function ProductList() {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    getProducts().then(setProducts).catch(console.error);
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {products.map(product => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
}
