import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ABRO Cycles - India\'s First Cruiser Cycle Manufacturer',
  description: 'ABRO Cycles is the pioneering Indian manufacturer of cruiser cycles—crafted with precision engineering, state-of-the-art design, and a mission to introduce the world\'s most comfortable and stylish ride to Indian cycling enthusiasts.',
  keywords: 'ABRO Cycles, cruiser cycle, India, bicycle manufacturer, engineering, cycling, bicycle, cruiser bike, Indian cycling, bicycle company',
  authors: [{ name: 'ABRO Cycles' }],
  creator: 'ABRO Cycles',
  publisher: 'ABRO Cycles',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://abro-cycles.com',
    siteName: 'ABRO Cycles',
    title: 'ABRO Cycles - India\'s First Cruiser Cycle Manufacturer',
    description: 'ABRO Cycles is the pioneering Indian manufacturer of cruiser cycles—crafted with precision engineering, state-of-the-art design, and a mission to introduce the world\'s most comfortable and stylish ride to Indian cycling enthusiasts.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ABRO Cycles - India\'s First Cruiser Cycle',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@abro_cycles',
    creator: '@abro_cycles',
    title: 'ABRO Cycles - India\'s First Cruiser Cycle Manufacturer',
    description: 'ABRO Cycles is the pioneering Indian manufacturer of cruiser cycles—crafted with precision engineering, state-of-the-art design, and a mission to introduce the world\'s most comfortable and stylish ride to Indian cycling enthusiasts.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  other: {
    'msapplication-TileColor': '#1f2937',
    'theme-color': '#1f2937',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}