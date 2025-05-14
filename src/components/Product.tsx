import Image from 'next/image';
import Link from 'next/link';

import { ProductType } from '@/types/product';

export default function Product({
  id,
  imageURL,
  productName,
  description,
  price,
}: ProductType) {
  return (
    <Link href={`/product/${id}`} className="flex w-[90%] flex-col gap-2 p-3">
      <div className="relative aspect-square w-full">
        <Image
          src={imageURL}
          alt={productName}
          fill
          className="rounded-md object-cover"
        />
      </div>
      <div>
        <h3 className="line-clamp-1 font-medium">{productName}</h3>
        <p className="line-clamp-1 text-sm">{description}</p>
        <p className="line-clamp-1 font-medium">{price.toLocaleString()}원</p>
      </div>
    </Link>
  );
}
