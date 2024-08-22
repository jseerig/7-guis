'use client';

import Button from '@/components/common/button';
import ContentWrapper from '@/components/layout/contentWrapper';
import { useState } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <ContentWrapper title='Counter'>
      <div className='flex mx-auto justify-center gap-20 items-center'>
        <span className='text-4xl font-bold'>{counter}</span>
        <Button
          text='Count'
          onClickHandler={() => setCounter((prevCount) => prevCount + 1)}
        />
      </div>
    </ContentWrapper>
  );
}
