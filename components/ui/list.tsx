import { Person } from '@/types/crud-types';

type ListProps = {
  list: Person[];
  activeIndex?: number;
  setActiveIndex: (index: number) => void;
};

export default function List({ list, activeIndex, setActiveIndex }: ListProps) {
  return (
    <div className='size-full border border-green-100 bg-white'>
      {list.map((person, index) => (
        <div
          key={index}
          className={`flex cursor-pointer gap-2 p-2 text-xs ${
            index === activeIndex ? 'bg-green-100' : ''
          }`}
          onClick={() => setActiveIndex(index)}
        >
          <p>{person.surname},</p>
          <p>{person.name}</p>
        </div>
      ))}
    </div>
  );
}
