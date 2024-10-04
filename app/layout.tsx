import '../styles/globals.css';
import { NavLink } from '@/components/layout/navLink';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Juliens GUIs',
  description: 'Juliens GUIs',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <NavLink />
        <main>{children}</main>
      </body>
    </html>
  );
}
