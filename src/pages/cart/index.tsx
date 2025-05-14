import { useEffect, useState } from 'react';

import { getCartItems, getProducts } from '@/api/apiRequest';
import CartItem from '@/components/CartItem';
import { CartItemType } from '@/types/cartItem';
import { ProductType } from '@/types/product';

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [products, setProducts] = useState<ProductType[]>([]);

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
        return <CartItem key={item.id} item={item} product={product} />;
      })}
    </div>
  );
}
