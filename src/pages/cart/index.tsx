import { useEffect, useState } from 'react';

import { getCartItems, getProducts } from '@/api/apiRequest';
import CartItem from '@/components/CartItem';
import { CartItemType } from '@/types/cartItem';
import { ProductType } from '@/types/product';

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [products, setProducts] = useState<ProductType[]>([]);
  const buttonText = cartItems.length > 0 ? '구매하기' : '상품 보러가기';

  useEffect(() => {
    getCartItems()
      .then(setCartItems)
      .catch(err => {
        console.error('장바구니 데이터를 불러오는 데 실패했습니다', err);
      });
  }, []);

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(err => {
        console.error('상품 데이터를 불러오는 데 실패했습니다', err);
      });
  }, []);

  const getProductById = (productId: number) => {
    return products.find(product => Number(product.id) === Number(productId));
  };

  const handleDelete = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const totalPrice = cartItems.reduce((sum, item) => {
    const product = getProductById(item.productId);
    if (!product) return sum;
    return sum + item.quantity * product.price;
  }, 0);

  return (
    <div>
      {cartItems.map(item => {
        const product = getProductById(item.productId);

        if (!product) return null;

        return (
          <CartItem
            key={item.id}
            item={item}
            product={product}
            onDelete={handleDelete}
          />
        );
      })}
      {cartItems.length > 0 ? (
        <CartSummary totalPrice={totalPrice} />
      ) : (
        <CartEmptyMessage />
      )}
      <div className="flex justify-center">
        <button className="bg-point border-point my-8 w-1/2 cursor-pointer rounded-xl border py-4 text-lg font-bold text-white">
          {buttonText}
        </button>
      </div>
    </div>
  );
}
function CartSummary({ totalPrice }: { totalPrice: number }) {
  return (
    <div className="bg-gray-1/50 mt-8 px-5 py-8">
      <p className="text-center">
        총 주문금액 <b>{totalPrice.toLocaleString()}원</b> + 배송비 <b>0원</b> =
        <b className="text-point text-lg">
          총 결제 금액 {totalPrice.toLocaleString()}원
        </b>
      </p>
    </div>
  );
}

function CartEmptyMessage() {
  return (
    <p className="text-gray-2 mt-10 px-5 py-8 text-center">
      장바구니에 담긴 상품이 없습니다!
    </p>
  );
}
