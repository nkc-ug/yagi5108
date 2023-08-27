import { useCallback, useState } from 'react';

type useInputType = [
  string,
  React.Dispatch<React.SetStateAction<string>>,
  (e: React.ChangeEvent<HTMLInputElement>) => void
];

/**
 * 入力欄をハンドリングするカスタムフック
 *
 * @param initialValue 初期の文字列
 * @returns [value, setValue, handleChange]
 */
export const useInput = (initialValue: string): useInputType => {
  const [value, setValue] = useState(initialValue);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return [value, setValue, handleChange];
};
