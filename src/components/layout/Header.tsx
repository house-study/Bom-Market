import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaShoppingCart } from 'react-icons/fa';

import { CART_HEADER, MAIN_HEADER } from '@/constants/header';

export default function Header() {
  const router = useRouter();
  const pageName = router.pathname;

  const headerText = pageName.includes('cart') ? CART_HEADER : MAIN_HEADER;

  return (
    <div className="fixed inset-x-0 z-[var(--z-header)] h-20 bg-white p-4">
      <h1 className="text-center text-3xl font-bold sm:text-5xl">
        {headerText}
      </h1>
      {!pageName.includes('cart') && (
        <Link
          href="/cart"
          className="absolute top-5 right-5 text-2xl sm:text-4xl"
        >
          <FaShoppingCart />
        </Link>
      )}
    </div>
  );
}
