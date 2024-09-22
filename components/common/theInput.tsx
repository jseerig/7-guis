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
    <div className='flex flex-row gap-4 items-center w-full justify-between'>
      <input
        className='border w-auto self-start border-green-700 text-right bg-red-50 rounded-xl p-2 hover:bg-green-400 transition-colors ease-in-out duration-500 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:text-gray-500 disabled:border-green-100'
        onChange={onChangeHandler}
        id={label}
        {...rest}
      ></input>
      <p className='disabled:text-gray-500'>{label}</p>
    </div>
  );
}
