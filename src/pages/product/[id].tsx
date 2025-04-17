import Image from 'next/image';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useState, useEffect } from 'react';

const URL = 'http://localhost:3001';

interface ProductType {
  id: number;
  imageURL: string;
  productName: string;
  description: string;
  price: number;
}

export default function ProductDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState<ProductType | null>(null);

  useEffect(() => {
    if (!id) return;

    axios
      .get(`${URL}/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(console.error);
  }, [id]);

  if (!product) return <p>로딩 중...</p>;

  return (
    <div className="flex gap-10 pt-10">
      <div className="relative aspect-square grow-1">
        <Image
          src={product.imageURL}
          alt={product.productName}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex grow-1 flex-col py-7">
        <span className="text-xs">구매가</span>
        <strong className="text-lg font-bold">
          {product.price.toLocaleString()}원
        </strong>
        <h1 className="pt-2 pb-1">{product.productName}</h1>
        <p className="text-gray-2 text-xs">{product.description}</p>
        <div className="flex flex-col gap-3 pt-20">
          <button className="bg-point border-point w-full cursor-pointer rounded-xl border py-4 text-lg font-bold text-white">
            구매하기
          </button>
          <button className="border-gray-1 w-full cursor-pointer rounded-xl border bg-white py-4">
            관심상품
          </button>
        </div>
      </div>
    </div>
  );
}
