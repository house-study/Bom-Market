import axiosInstance from '@/api/axiosInstance';
import { CartItemType } from '@/types/cartItem.d';
import { ProductType } from '@/types/product.d';

export const getProducts = async () => {
  const res = await axiosInstance.get<ProductType[]>('/products');
  return res.data;
};

export const getProductDetail = async (id: number) => {
  const res = await axiosInstance.get<ProductType>(`/products/${id}`);
  return res.data;
};

export const getCartItems = async () => {
  const res = await axiosInstance.get<CartItemType[]>('/cart');
  return res.data;
};
