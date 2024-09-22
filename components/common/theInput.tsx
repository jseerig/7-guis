import { ComponentProps } from 'react';

interface TheInputProps extends ComponentProps<'input'> {
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

export default function TheInput({
  onChangeHandler,
  label,
  ...rest
}: TheInputProps) {
  return (
    <div className='flex w-full flex-row items-center justify-between gap-4'>
      <input
        className='w-auto self-start rounded-xl border border-green-700 p-2 text-right transition-colors duration-500 ease-in-out hover:bg-green-400 disabled:cursor-not-allowed disabled:border-green-100 disabled:bg-gray-200 disabled:text-gray-500'
        onChange={onChangeHandler}
        id={label}
        {...rest}
      ></input>
      <p className='disabled:text-gray-500'>{label}</p>
    </div>
  );
}
