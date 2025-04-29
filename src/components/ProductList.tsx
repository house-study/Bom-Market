import Link from 'next/link';
import { useState, useEffect } from 'react';

import { getProducts } from '@/api/apiRequest';
import Product from '@/components/Product';
import { ProductType } from '@/types/product';

export default function ProductList() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [error, setError] = useState<boolean>(false);
  const errorMessage = '상품을 불러오는 데 실패했습니다. 😭';

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(err => {
        console.error(err);
        setError(true);
      });
  }, []);

  if (error) {
    return (
      <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col gap-5 text-center">
        <p className="text-gray-2">{errorMessage} 😭</p>
        <Link
          href="/"
          className="bg-point rounded-xl border py-3 text-lg font-semibold text-white"
        >
          메인으로 가기
        </Link>
      </div>
    );
  }

  return (
    <section className="xs:grid-cols-2 grid grid-cols-1 place-items-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {products.map(product => (
        <Product key={product.id} {...product} />
      ))}
    </section>
  );
}
