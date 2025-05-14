export interface CountButtonType {
  count: number;
  onClick: (type: 'plus' | 'minus') => void;
}
