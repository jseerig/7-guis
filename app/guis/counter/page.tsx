'use client';

import TheButton from '@/components/common/theButton';
import ContentWrapper from '@/components/layout/contentWrapper';
import { COUNTER_LABELS } from '@/constants/counter';
import { useState } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <ContentWrapper title={COUNTER_LABELS.TITLE}>
      <div className='mx-auto flex items-center justify-center gap-20'>
        <span className='text-4xl font-bold'>{counter}</span>
        <TheButton
          text={COUNTER_LABELS.COUNT}
          onClickHandler={() => setCounter((prevCount) => prevCount + 1)}
        />
      </div>
    </ContentWrapper>
  );
}
