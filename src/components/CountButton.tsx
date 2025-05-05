import { useCount } from '@/hooks/useCount';

export default function CountButton({ maxQuantity }: { maxQuantity: number }) {
  const { count, handleCount } = useCount(maxQuantity);

  return (
    <div className="border-gray-1 text-gray-2 flex items-center gap-4 border bg-white">
      <button
        onClick={() => {
          handleCount('minus');
        }}
        className="border-gray-1 cursor-pointer border-x px-2 py-1"
      >
        -
      </button>
      <span className="text-xs font-bold">{count}</span>
      <button
        onClick={() => {
          handleCount('plus');
        }}
        className="border-gray-1 cursor-pointer border-x px-2 py-1"
      >
        +
      </button>
    </div>
  );
}
