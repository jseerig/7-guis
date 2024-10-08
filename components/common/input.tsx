import { ComponentProps, forwardRef } from 'react';

interface TheInputProps extends ComponentProps<'input'> {
  label?: string;
  labelLeft?: boolean;
  disableSpace?: boolean;
}

export const Input = forwardRef(function TheInput(
  { label, labelLeft = false, disableSpace = false, ...rest }: TheInputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  return (
    <div
      className={`flex w-full flex-row items-center gap-4 ${labelLeft && 'flex-row-reverse'} ${!disableSpace && 'justify-between'}`}
    >
      <input
        className='w-auto self-start rounded-xl border border-green-700 p-2 transition-colors duration-500 ease-in-out hover:bg-green-400 disabled:cursor-not-allowed disabled:border-green-100 disabled:bg-gray-200 disabled:text-gray-500'
        {...rest}
        ref={ref}
      ></input>
      <p className='disabled:text-gray-500'>{label}</p>
    </div>
  );
});
