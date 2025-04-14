import Image from 'next/image';

interface ProductType {
  id: number;
  imageURL: string;
  productName: string;
  description: string;
  price: number;
}

export default function Product({
  imageURL,
  productName,
  description,
  price,
}: ProductType) {
  return (
    <>
      <section className="box-content flex w-[200px] flex-col gap-2 p-3">
        <div className="relative h-[250px]">
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
      </section>
    </>
  );
}
