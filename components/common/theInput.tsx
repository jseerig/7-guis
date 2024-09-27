import { ComponentProps, forwardRef } from 'react';

interface TheInputProps extends ComponentProps<'input'> {
  onChangeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  labelLeft?: boolean;
  disableSpace?: boolean;
}

const TheInput = forwardRef(function TheInput(
  {
    onChangeHandler,
    label,
    labelLeft = false,
    disableSpace = false,
    ...rest
  }: TheInputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  return (
    <div
      className={`flex w-full flex-row items-center gap-4 ${labelLeft && 'flex-row-reverse'} ${!disableSpace && 'justify-between'}`}
    >
      <input
        className='w-auto self-start rounded-xl border border-green-700 p-2 transition-colors duration-500 ease-in-out hover:bg-green-400 disabled:cursor-not-allowed disabled:border-green-100 disabled:bg-gray-200 disabled:text-gray-500'
        onChange={onChangeHandler}
        id={label}
        {...rest}
        ref={ref}
      ></input>
      <p className='disabled:text-gray-500'>{label}</p>
    </div>
  );
});

export default TheInput;
