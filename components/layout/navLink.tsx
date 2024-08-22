'use client';

import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import type { Route } from 'next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink() {
  const pathname = usePathname() as Route;
  return (
    <nav className='my-8 container mx-auto'>
      {pathname !== '/' && (
        <Link
          className='group text-xl text-slate-700 flex gap-2 items-center hover:text-slate-900 transition-colors ease-in-out duration-500'
          href='/'
        >
          <ArrowLeftIcon className='w-6 h-6 group-hover:text-green-700 group-hover:mr-2 transition-all ease-in-out duration-500' />
          zurück zur Übersicht
        </Link>
      )}
    </nav>
  );
}
