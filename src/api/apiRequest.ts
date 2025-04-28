import axiosInstance from '@/api/axiosInstance';
import { ProductType } from '@/types/product';

export const getProducts = async (): Promise<ProductType[]> => {
  const res = await axiosInstance.get<ProductType[]>('/products');
  return res.data;
};

export const getProductDetail = async (id: number): Promise<ProductType> => {
  const res = await axiosInstance.get<ProductType>(`/products/${id}`);
  return res.data;
};
