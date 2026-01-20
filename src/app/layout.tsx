import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ClaudeFeed - AI-Generated Daily Content',
  description: 'Discover fresh AI-generated insights every day. ClaudeFeed delivers thought-provoking content powered by Claude AI.',
  keywords: ['AI', 'Claude', 'feed', 'daily content', 'artificial intelligence'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
