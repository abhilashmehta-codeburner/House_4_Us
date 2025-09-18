import './globals.css';
import Header from '@/components/Header/index';
import Footer from '@/components/Footer/index';
import AnalyticsProvider from '@/components/Analytics/AnalyticsProvider';

export const metadata = {
  title: 'Real Estate Website in India | Find Your Dream Home at House4Us',
  description:
    'Find your dream home with House4Us. Search for top properties across India from trusted builders. Best property deals online.',
  keywords:
    'Property, Real Estate, Homes, Apartments, Buy Property Online, House4Us',
  metadataBase: new URL('https://www.house4us.in'),
  openGraph: {
    title: 'Real Estate Website in India | Find Your Dream Home at House4Us',
    description:
      'Find your dream home with House4Us. Search for top properties across India from trusted builders. Best property deals online.',
    url: 'https://www.house4us.in',
    siteName: 'House4Us',
    images: [
      {
        url: '/favicon.ico',
        width: 1200,
        height: 630,
        alt: 'House4Us Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://www.house4us.in',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <AnalyticsProvider /> {/* ✅ Client-side scripts here */}
      </body>
    </html>
  );
}
