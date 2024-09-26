import classNames from 'classnames';
import { Inter } from 'next/font/google';

import Navbar from '@/components/navbar';
import ThemeProvider from '@/components/theme-provider';
import { TooltipProvider } from '@/components/tooltip';
import type { Metadata } from 'next';

import './globals.css';

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Tu Xuan - Frontend Developer Portfolio',
  description:
    'Welcome to the portfolio of Tu Xuan, a frontend developer specializing in Vue, React, Next.js, and modern web technologies.',
  keywords:
    'Frontend Developer, Vue, React, Next.js, JavaScript, Web Developer, Portfolio',
  authors: {
    name: 'Tu Xuan',
  },
  openGraph: {
    title: 'Tu Xuan - Frontend Developer Portfolio',
    description:
      'Frontend developer specializing in Vue, React, Next.js, and modern web technologies. Explore my projects and skills.',
    url: 'https://xuan-tu-dev.vercel.app',
    type: 'website',
    images: [
      {
        url: 'https://xuan-tu-dev.vercel.app/tran-xuan-tu.png',
        width: 1200,
        height: 600,
        alt: 'Tu Xuan Portfolio',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={classNames(
          'bg-background font-sans antialiased max-w-5xl mx-auto',
          fontSans.variable,
        )}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
