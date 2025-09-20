import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: {
    default: 'YES ACADEMY - Where Champions Are Made',
    template: '%s | YES ACADEMY',
  },
  description:
    'YES ACADEMY is a premium multisport academy in China and Vietnam, offering expert coaching for children, teens, and adults. Join us to start your journey to victory.',
  keywords: [
    'multisport academy',
    'China',
    'Vietnam',
    'expatriate families',
    'local families',
    'football',
    'basketball',
    'volleyball',
    'tennis',
    'golf',
    'scuba diving',
    'climbing',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className="font-body antialiased">
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <Toaster />
      </body>
    </html>
  );
}
