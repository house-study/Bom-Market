import type { CountButtonType } from '@/types/countButton';

export default function CountButton({ count, onClick }: CountButtonType) {
  return (
    <div className="border-gray-1 text-gray-2 flex items-center gap-4 border bg-white">
      <button
        onClick={() => {
          onClick('minus');
        }}
        className="border-gray-1 cursor-pointer border-x px-2 py-1"
      >
        -
      </button>
      <span className="text-xs font-bold">{count}</span>
      <button
        onClick={() => {
          onClick('plus');
        }}
        className="border-gray-1 cursor-pointer border-x px-2 py-1"
      >
        +
      </button>
    </div>
  );
}
