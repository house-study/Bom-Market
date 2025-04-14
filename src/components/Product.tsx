import Image from 'next/image';

type Product = {
  id: number;
  imageURL: string;
  productName: string;
  description: string;
  price: number;
};

export default function Product({
  imageURL,
  productName,
  description,
  price,
}: Product) {
  return (
    <>
      <section className="flex flex-col gap-2 p-3">
        <div className="relative h-[250px] w-[200px]">
          <Image
            src={imageURL}
            alt={productName}
            fill
            className="rounded-md object-cover"
          />
        </div>
        <div>
          <h3 className="font-medium">{productName}</h3>
          <p className="text-sm">{description}</p>
          <p className="font-medium">{price.toLocaleString()}원</p>
        </div>
      </section>
    </>
  );
}
