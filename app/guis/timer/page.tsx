'use client';

import TheButton from '@/components/common/theButton';
import ContentWrapper from '@/components/layout/contentWrapper';
import ProgressBar from '@/components/ui/progressBar';
import { TIMER_LABELS } from '@/constants';
import { useState } from 'react';

export default function Timer() {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const durationInSec = duration / 1000;
  const currentTimeInSec = currentTime / 1000;
  return (
    <ContentWrapper title='Timer'>
      <div className='grid grid-cols-2 mx-auto w-1/3 justify-center gap-8 items-center'>
        <p>{TIMER_LABELS.ELAPSED_TIME}</p>
        <ProgressBar
          end={duration}
          current={currentTime}
          setCurrent={setCurrentTime}
        />
        <p className='col-span-2 text-center text-green-800 bold'>
          {currentTimeInSec} s
        </p>
        <p>{TIMER_LABELS.DURATION}</p>
        <div className='flex flex-row items-center gap-4'>
          <p className='w-8 text-xs'>{durationInSec}s</p>
          <input
            type='range'
            className='transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200'
            min={1}
            max={100}
            onChange={(e) => setDuration(Number(e.target.value) * 1000)}
            value={durationInSec}
          />
        </div>
        <TheButton
          text='Reset'
          onClickHandler={() => {
            setCurrentTime(0);
          }}
          className='col-span-2'
        />
      </div>
    </ContentWrapper>
  );
}
