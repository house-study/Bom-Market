import axiosInstance from '@/api/axiosInstance';
import { ProductType } from '@/types/product';

export const getProducts = async (): Promise<ProductType[]> => {
  const res = await axiosInstance.get<ProductType[]>('/products');
  return res.data;
};
