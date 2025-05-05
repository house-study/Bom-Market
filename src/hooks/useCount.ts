import { useState } from 'react';

export function useCount(max: number) {
  const [count, setCount] = useState(1);

  const handleCount = (type: 'plus' | 'minus') => {
    if (type === 'plus') {
      if (count >= max) {
        alert('구매 가능한 최대 수량입니다. 🥲');
        return;
      }
      setCount(prev => prev + 1);
    } else if (type === 'minus') {
      setCount(prev => Math.max(prev - 1, 1));
    }
  };

  return { count, setCount, handleCount };
}
