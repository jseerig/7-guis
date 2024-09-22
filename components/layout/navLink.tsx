'use client';

import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import type { Route } from 'next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink() {
  const pathname = usePathname() as Route;
  return (
    <nav className='container mx-auto my-8'>
      {pathname !== '/' && (
        <Link
          className='group flex items-center gap-2 text-xl text-slate-700 transition-colors duration-500 ease-in-out hover:text-slate-900'
          href='/'
        >
          <ArrowLeftIcon className='h-6 w-6 transition-all duration-500 ease-in-out group-hover:mr-2 group-hover:text-green-700' />
          zurück zur Übersicht
        </Link>
      )}
    </nav>
  );
}
