import { ContentWrapper } from '@/components/layout/contentWrapper';
import { LinkCard } from '@/components/ui/linkCard';
import { COUNTER_LABELS } from '@/t18n/counter';
import { CRUD_LABELS } from '@/t18n/crud';
import { FLIGHT_BOOKER_LABELS } from '@/t18n/flightBooker';
import { TEMPERATURE_CONVERTER_LABELS } from '@/t18n/temperatureConverter';
import { TIMER_LABELS } from '@/t18n/timer';

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
