import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import NavigationMenu from '@/shared/NavigationMenu';
import Footer from '@/shared/Footer';
import { Toast } from '@heroui/react';
import HeroUiThemeProvider from '@/Components/Provider/HeroUiThemeProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'ZenoTutor | Book Doctors Easily',
  description:
    'Book doctor appointments online with ZenoTutor. Fast, secure, and easy healthcare access.',
  keywords: ['doctor booking', 'appointment system', 'healthcare', 'ZenoTutor'],
  authors: [{ name: 'Nill Ray' }],
  openGraph: {
    title: 'ZenoTutor',
    description: 'Easy doctor booking system',
    url: 'https://yourdomain.com',
    siteName: 'ZenoTutor',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <HeroUiThemeProvider>
          <Toast.Provider placement="top" />
          <NavigationMenu />
          {children}
          <Footer />
        </HeroUiThemeProvider>
      </body>
    </html>
  );
}
