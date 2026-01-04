import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { homepageKeywords, generateKeywordsString } from '../utils/SEO';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'YatraWheels - India\'s Leading Vehicle Rental Platform | Book Cars, Buses & More',
  description: 'Book premium vehicles across India. Verified fleet of cars, tempo travellers, and buses. Best prices, 24/7 support, and instant booking. Your trusted travel partner.',
  keywords: generateKeywordsString(homepageKeywords),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen bg-white">
          <Navbar />
          <main className="flex-grow pt-12">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}