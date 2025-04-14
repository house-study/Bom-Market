import Product from '@/components/Product';

export default function ProductList() {
  const products = [
    {
      id: 1,
      imageURL: '/sample.jpeg',
      productName: '사과',
      description: '신선하고 달콤한 아오리 사과',
      price: 3000,
    },
    {
      id: 2,
      imageURL: '/sample2.png',
      productName: '바나나',
      description: '부드럽고 달달한 바나나',
      price: 2500,
    },
    {
      id: 3,
      imageURL: '/sample.jpeg',
      productName: '딸기',
      description: '국내산 논산 딸기',
      price: 4500,
    },
    {
      id: 4,
      imageURL: '/sample.jpeg',
      productName: '수박',
      description: '여름철 시원한 대형 수박',
      price: 10000,
    },
    {
      id: 5,
      imageURL: '/sample2.png',
      productName: '포도',
      description: '씨 없는 달콤한 청포도',
      price: 5500,
    },
    {
      id: 6,
      imageURL: '/sample.jpeg',
      productName: '복숭아',
      description: '과즙 가득한 천도 복숭아',
      price: 4800,
    },
    {
      id: 7,
      imageURL: '/sample.jpeg',
      productName: '자두',
      description: '톡 쏘는 맛의 신선한 자두',
      price: 3200,
    },
    {
      id: 8,
      imageURL: '/sample2.png',
      productName: '오렌지',
      description: '비타민 C가 풍부한 오렌지',
      price: 3900,
    },
    {
      id: 9,
      imageURL: '/sample2.png',
      productName: '망고',
      description: '달콤한 필리핀산 망고',
      price: 6700,
    },
    {
      id: 10,
      imageURL: '/sample.jpeg',
      productName: '레몬',
      description: '상큼한 맛의 유기농 레몬',
      price: 2100,
    },
    {
      id: 11,
      imageURL: '/sample2.png',
      productName: '키위',
      description: '새콤달콤한 뉴질랜드 키위',
      price: 3500,
    },
    {
      id: 12,
      imageURL: '/sample.jpeg',
      productName: '파인애플',
      description: '쥬시하고 상큼한 파인애플',
      price: 5600,
    },
    {
      id: 13,
      imageURL: '/sample.jpeg',
      productName: '체리',
      description: '씨가 적고 단맛이 강한 체리',
      price: 7200,
    },
    {
      id: 14,
      imageURL: '/sample.jpeg',
      productName: '감',
      description: '달콤하고 부드러운 홍시 감',
      price: 3000,
    },
    {
      id: 15,
      imageURL: '/sample.jpeg',
      productName: '석류',
      description: '영양 가득한 루비 석류',
      price: 4500,
    },
    {
      id: 16,
      imageURL: '/sample.jpeg',
      productName: '멜론',
      description: '과육이 부드럽고 달콤한 멜론',
      price: 9000,
    },
    {
      id: 17,
      imageURL: '/sample.jpeg',
      productName: '참외',
      description: '여름철 인기 과일 성주 참외',
      price: 3800,
    },
    {
      id: 18,
      imageURL: '/sample.jpeg',
      productName: '블루베리',
      description: '눈 건강에 좋은 블루베리',
      price: 4900,
    },
    {
      id: 19,
      imageURL: '/sample.jpeg',
      productName: '아보카도',
      description: '건강한 지방이 풍부한 아보카도',
      price: 4200,
    },
    {
      id: 20,
      imageURL: '/sample.jpeg',
      productName: '라임',
      description: '요리에 잘 어울리는 상큼한 라임',
      price: 2300,
    },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {products.map(product => {
        return <Product key={product.id} {...product} />;
      })}
    </div>
  );
}
