import ContentWrapper from '@/components/layout/contentWrapper';
import LinkCard from '@/components/ui/linkCard';

export default function Home() {
  return (
    <ContentWrapper title='Julien GUIs'>
      <div className='grid grid-cols-2 gap-8'>
        <LinkCard title='Counter' link='/guis/counter' />
        <LinkCard
          title='Temperature Converter'
          link='/guis/temperatureConverter'
        />
        <LinkCard title='Flight Booker' link='/guis/flightBooker' />
        <LinkCard title='Timer' link='/guis/timer' />
        <LinkCard title='CRUD' link='/guis/crud' />
      </div>
    </ContentWrapper>
  );
}
