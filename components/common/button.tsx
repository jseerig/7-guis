type ButtonProps = {
  text: string;
  onClickHandler: () => void;
};

export default function Button({ text, onClickHandler }: ButtonProps) {
  return (
    <button
      className='bg-green-100 rounded-xl h-full p-8 hover:bg-green-400 transition-all ease-in-out duration-500 drop-shadow-xl hover:drop-shadow-none'
      onClick={onClickHandler}
    >
      {text}
    </button>
  );
}
