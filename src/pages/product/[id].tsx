import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { useState } from 'react';

import { getProductDetail } from '@/api/apiRequest';
import { ProductType } from '@/types/product';

export default function ProductDetailPage({
  product,
}: {
  product: ProductType;
}) {
  const [count, setCount] = useState(1);
  const handleCount = (type: 'plus' | 'minus') => {
    if (type === 'plus') {
      if (count > product?.count) {
        alert('구매 가능한 최대 수량입니다. 🥲');
        return;
      }
      setCount(prev => prev + 1);
    }
    if (type === 'minus') setCount(prev => Math.max(prev - 1, 1));
  };

  return (
    <div className="mx-auto flex w-4/5 flex-col gap-5 pt-10 md:flex md:w-9/10 md:flex-row md:gap-15">
      <div className="relative aspect-square grow-1">
        <Image
          src={product.imageURL}
          alt={product.productName}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex grow-1 flex-col py-2 md:py-7">
        <span className="text-xs">구매가</span>
        <strong className="text-lg font-bold">
          {product.price.toLocaleString()}원
        </strong>
        <h1 className="pt-2 pb-1">{product.productName}</h1>
        <p className="text-xs">{product.description}</p>
        <p className="text-gray-2 text-xs">원산지 : {product.origin}</p>
        <div className="bg-gray-1/60 my-5 px-4 py-2 text-sm md:my-10">
          <p className="after:bg-gray-2/20 relative py-3 font-normal after:absolute after:top-10 after:-left-3 after:mx-3 after:h-px after:w-full after:content-['']">
            수량
          </p>
          <div className="flex items-center justify-between py-4">
            <div className="border-gray-1 text-gray-2 flex items-center gap-4 border bg-white">
              <button
                onClick={() => {
                  handleCount('minus');
                }}
                className="border-gray-1 cursor-pointer border-x px-2 py-1"
              >
                -
              </button>
              <span className="text-xs font-bold">{count}</span>
              <button
                onClick={() => {
                  handleCount('plus');
                }}
                className="border-gray-1 cursor-pointer border-x px-2 py-1"
              >
                +
              </button>
            </div>
            <strong className="font-bold">
              {product.price.toLocaleString()}원
            </strong>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <button className="bg-point border-point w-full cursor-pointer rounded-xl border py-4 text-lg font-bold text-white">
            구매하기
          </button>
          <button className="border-point text-point w-full cursor-pointer rounded-xl border bg-white py-4 text-lg font-bold">
            장바구니
          </button>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params?.id;

  if (!id) {
    return { notFound: true };
  }

  try {
    const product = await getProductDetail(Number(id));
    return {
      props: { product },
    };
  } catch (error) {
    console.error(error);
    return { notFound: true };
  }
};
