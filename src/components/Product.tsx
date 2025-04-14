import Image from 'next/image';

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
    <>
      <section className="flex flex-col gap-2 p-3">
        <Image
          src={imageURL}
          alt={productName}
          width={200}
          height={200}
          className="rounded-md"
        />
        <div>
          <h3 className="font-medium">{productName}</h3>
          <p className="text-sm">{description}</p>
          <p className="font-medium">{price.toLocaleString()}원</p>
        </div>
      </section>
    </>
  );
}
