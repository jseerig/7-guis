import type { Route } from 'next';
import Link from 'next/link';

type LinkCardProps = {
  title: string;
  link: Route;
  icon?: string;
};

export default function LinkCard({ link, title, icon }: LinkCardProps) {
  return (
    <Link
      href={link}
      className='group rounded-lg border px-5 py-4 transition-all border-gray-300 bg-gray-100 hover:bg-green-400 hover:drop-shadow-2xl ease-in-out duration-500 cursor-pointer'
    >
      {icon && <img src={icon} alt={title} className='w-8 h-8' />}
      <p className='text-center text-2xl font-bold'>{title}</p>
    </Link>
  );
}
