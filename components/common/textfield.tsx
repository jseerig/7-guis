// import { POSITIONS } from '@/types/layout-types';
import { TEMPERATURE_UNITS } from '@/types/component-types';
import { HTMLInputTypeAttribute } from 'react';

type TextfieldProps = {
  type: HTMLInputTypeAttribute;
  value: string | number;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
};

export default function Textfield({
  type,
  onChangeHandler,
  value,
  label,
}: TextfieldProps) {
  return (
    <div className='flex flex-row gap-4 justify-center items-center'>
      <input
        type={type}
        className='border border-green-700 text-right bg-red-50 rounded-xl p-2 hover:bg-green-400 transition-colors ease-in-out duration-500'
        onChange={onChangeHandler}
        id={label}
        value={value}
      ></input>
      <p>{label}</p>
    </div>
  );
}
