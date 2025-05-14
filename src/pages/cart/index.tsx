import { useEffect, useState } from 'react';

import { getCartItems, getProducts } from '@/api/apiRequest';
import CartItem from '@/components/CartItem';
import { CartItemType } from '@/types/cartItem';
import { ProductType } from '@/types/product';

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [products, setProducts] = useState<ProductType[]>([]);
  let totalPrice = 0;

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

  return (
    <div>
      {cartItems.map(item => {
        const product = getProductById(item.productId);

        if (!product) return null;

        totalPrice += item.quantity * product.price;
        return <CartItem key={item.id} item={item} product={product} />;
      })}
      <div className="bg-gray-1/50 mt-8 px-5 py-8">
        <p className="text-center">
          총 주문금액<b> {totalPrice.toLocaleString()}원</b> + 배송비 <b>0원</b>{' '}
          ={' '}
          <b className="text-point text-lg">
            총 결제 금액 {totalPrice.toLocaleString()}원
          </b>
        </p>
      </div>
      <div className="flex justify-center">
        <button className="bg-point border-point my-8 w-1/2 cursor-pointer rounded-xl border py-4 text-lg font-bold text-white">
          구매하기
        </button>
      </div>
    </div>
  );
}
