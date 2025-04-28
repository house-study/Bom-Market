import { GetServerSideProps } from 'next';
import Image from 'next/image';

const URL = process.env.API_URL_SERVER;

interface ProductType {
  id: number;
  imageURL: string;
  productName: string;
  description: string;
  price: number;
}

export default function ProductDetailPage({
  product,
}: {
  product: ProductType;
}) {
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
        <p className="text-gray-2 text-xs">{product.description}</p>
        <div className="flex flex-col gap-3 pt-10 md:pt-20">
          <button className="bg-point border-point w-full cursor-pointer rounded-xl border py-4 text-lg font-bold text-white">
            구매하기
          </button>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params?.id;

  const res = await fetch(`${URL}/products/${id}`);
  if (!res.ok) {
    return { notFound: true };
  }

  const product: ProductType = await res.json();

  return {
    props: { product },
  };
};
