import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import NavigationMenu from '@/shared/NavigationMenu';
import Footer from '@/shared/Footer';
import { Toast } from '@heroui/react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'MediQueue | Book Doctors Easily',
  description:
    'Book doctor appointments online with MediQueue. Fast, secure, and easy healthcare access.',
  keywords: ['doctor booking', 'appointment system', 'healthcare', 'MediQueue'],
  authors: [{ name: 'Nill Ray' }],
  openGraph: {
    title: 'MediQueue',
    description: 'Easy doctor booking system',
    url: 'https://yourdomain.com',
    siteName: 'MediQueue',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Toast.Provider placement="top" />
        <NavigationMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
