import Image from 'next/image';
import { IoCloseOutline } from 'react-icons/io5';

import { removeCartItem } from '@/api/apiRequest';
import CountButton from '@/components/CountButton';
import { useCount } from '@/hooks/useCount';
import { CartItemType } from '@/types/cartItem';
import { ProductType } from '@/types/product';

interface Types {
  item: CartItemType;
  product: ProductType;
  onDelete: (id: number) => void;
}

export default function CartItemCard({ item, product, onDelete }: Types) {
  const { count, handleCount } = useCount(product.count, item.quantity);
  const handleDeleteItem = async (id: number) => {
    await removeCartItem(id);
    onDelete(id);
  };

  return (
    <div className="relative flex w-full gap-4 p-3">
      <button
        onClick={() => handleDeleteItem(item.id)}
        className="hover:text-point absolute top-5 right-5 cursor-pointer text-xl hover:text-2xl"
      >
        <IoCloseOutline />
      </button>
      <input
        type="checkbox"
        className="accent-point rounded-full1 h-5 w-5 self-center"
      />
      <div className="relative aspect-square w-1/5">
        <Image
          src={product.imageURL}
          alt={product.productName}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex grow-1 flex-col justify-between py-4">
        <p className="font-semibold">{product.productName}</p>

        <div className="flex items-center justify-between py-1">
          <CountButton count={count} onClick={handleCount} />
          <strong className="font-bold">
            {(product.price * count).toLocaleString()}원
          </strong>
        </div>
      </div>
    </div>
  );
}
