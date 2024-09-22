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
  }, [current, end, setCurrent]);

  return (
    <div className='h-4 w-full rounded-xl bg-gray-50'>
      <div
        className={
          'h-full rounded-xl bg-green-400 transition-all duration-100 ease-in-out'
        }
        style={{ width: `${calculatedWidth}%` }}
      ></div>
    </div>
  );
}
