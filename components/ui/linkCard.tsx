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
      className='group cursor-pointer rounded-lg border border-gray-300 bg-gray-100 px-5 py-4 transition-all duration-500 ease-in-out hover:bg-green-400 hover:drop-shadow-2xl'
    >
      {icon && <img src={icon} alt={title} className='h-8 w-8' />}
      <p className='text-center text-2xl font-bold'>{title}</p>
    </Link>
  );
}
