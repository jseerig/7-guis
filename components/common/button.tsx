import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
} from 'react';

export function Button({
  children,
  ...rest
}: PropsWithChildren<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>) {
  return (
    <button
      {...rest}
      className={`h-full rounded-xl bg-green-100 p-6 drop-shadow-xl transition-all duration-500 ease-in-out hover:bg-green-400 hover:drop-shadow-none disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500 disabled:drop-shadow-none ${rest.className}`}
    >
      {children}
    </button>
  );
}
