import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type ProgressBarProps = {
  end: number;
  current: number;
  setCurrent: Dispatch<SetStateAction<number>>;
};

export default function ProgressBar({
  end,
  current,
  setCurrent,
}: ProgressBarProps) {
  const calculatedWidth =
    end <= current ? 100 : ((100 / (end / 1000)) * current) / 1000;
  useEffect(() => {
    if (current < end) {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev < end ? prev + 100 : prev));
      }, 100);

      return () => clearInterval(interval);
    }
  }, [current, end]);

  return (
    <div className='w-full h-4 bg-gray-50 rounded-xl'>
      <div
        className={
          'h-full bg-green-400 rounded-xl transition-all ease-in-out duration-100'
        }
        style={{ width: `${calculatedWidth}%` }}
      ></div>
    </div>
  );
}
