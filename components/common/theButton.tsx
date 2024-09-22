import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text: string;
  onClickHandler: () => void;
}

export default function TheButton({
  text,
  onClickHandler,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={`bg-green-100 rounded-xl h-full p-8 hover:bg-green-400 transition-all ease-in-out duration-500 drop-shadow-xl hover:drop-shadow-none disabled:bg-gray-200 disabled:cursor-not-allowed disabled:text-gray-500 disabled:drop-shadow-none ${rest.className}`}
      onClick={onClickHandler}
    >
      {text}
    </button>
  );
}
