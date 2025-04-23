import { useState, useEffect } from 'react';

import { getProducts } from '@/api/apiRequest';
import Product from '@/components/Product';
import { ProductType } from '@/types/product';

export default function ProductList() {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    getProducts().then(setProducts).catch(console.error);
  }, []);

  return (
    <section className="xs:grid-cols-2 grid grid-cols-1 place-items-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {products.map(product => (
        <Product key={product.id} {...product} />
      ))}
    </section>
  );
}
