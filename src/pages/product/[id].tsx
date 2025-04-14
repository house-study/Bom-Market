import { useRouter } from 'next/router';

export default function ProductDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Product Detail Page</h1>
      <p>상품 ID: {id}</p>
    </div>
  );
}
