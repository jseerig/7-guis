import { HTMLAttributes } from 'react';

interface ListItemProps<T extends object, K extends Array<keyof T>>
  extends HTMLAttributes<HTMLLIElement> {
  data: T;
  properties: K;
  active?: boolean;
}

export function ListItem<T extends object, K extends Array<keyof T>>({
  data,
  properties,
  active,
  ...rest
}: ListItemProps<T, K>) {
  const value =
    properties.length === 1
      ? data[properties[0]]
      : properties.map((property) => data[property]).join(', ');
  return (
    <li
      {...rest}
      className={`flex cursor-pointer gap-2 p-2 text-xs ${
        active ? 'bg-green-100' : ''
      }`}
    >
      {value as string}
    </li>
  );
}
