import Image from 'next/image';
import Link from 'next/link';

type Product = {
  id: number;
  imageURL: string;
  productName: string;
  description: string;
  price: number;
};

export default function Product({
  id,
  imageURL,
  productName,
  description,
  price,
}: Product) {
  return (
    <section className="box-content flex w-[200px] flex-col gap-2 p-3">
      <Link href={`/product/${id}`}>
        <div className="relative h-[200px]">
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
    </section>
  );
}
