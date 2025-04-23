import { ReactNode } from 'react';

import Header from '@/components/layout/Header';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1200px] px-10 pt-20">{children}</main>
    </>
  );
}
