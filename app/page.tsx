import { ContentWrapper } from '@/components/layout/contentWrapper';
import { LinkCard } from '@/components/ui/linkCard';
import { COUNTER_LABELS } from '@/constants/counter';
import { CRUD_LABELS } from '@/constants/crud';
import { FLIGHT_BOOKER_LABELS } from '@/constants/flightBooker';
import { TEMPERATURE_CONVERTER_LABELS } from '@/constants/temperatureConverter';
import { TIMER_LABELS } from '@/constants/timer';

export default function Home() {
  return (
    <ContentWrapper title='Julien GUIs'>
      <div className='grid grid-cols-2 gap-8'>
        <LinkCard title={COUNTER_LABELS.TITLE} link='/guis/counter' />
        <LinkCard
          title={TEMPERATURE_CONVERTER_LABELS.TITLE}
          link='/guis/temperatureConverter'
        />
        <LinkCard
          title={FLIGHT_BOOKER_LABELS.TITLE}
          link='/guis/flightBooker'
        />
        <LinkCard title={TIMER_LABELS.TITLE} link='/guis/timer' />
        <LinkCard title={CRUD_LABELS.TITLE} link='/guis/crud' />
      </div>
    </ContentWrapper>
  );
}
