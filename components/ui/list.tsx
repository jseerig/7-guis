import { ReactElement } from 'react';
import { ListItem } from './listItem';

type ListProps = {
  children: ReactElement<typeof ListItem>[];
};

export function List(props: ListProps) {
  return (
    <div className='size-full border border-green-100 bg-white'>
      <ul>{props.children}</ul>
    </div>
  );
}
