import Script from 'next/script';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Header from '@/components/Header/index';
import './globals.css';

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
      <head>
        {/* Schema.org JSON-LD */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'House4Us',
              url: 'https://www.house4us.in/',
              logo: 'https://www.house4us.in/logo.png',
              sameAs: [
                'https://www.facebook.com/house4us',
                'https://www.instagram.com/house4us',
                'https://www.linkedin.com/company/house4us',
                'https://twitter.com/house4us_',
              ],
            }),
          }}
        />

        {/* Google Analytics using next/script */}
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX'
          strategy='afterInteractive'
        />
        <Script
          id='ga-script'
          strategy='afterInteractive'
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXX');
          `}
        </Script>

        {/* Meta Pixel (Facebook) using next/script */}
        <Script
          id='fb-pixel'
          strategy='afterInteractive'
        >
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'XXXXXXXXXXXXX');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />

        {/* Facebook noscript */}
        <noscript>
          <Image
            height={1}
            width={1}
            alt='Facebook Pixel'
            style={{ display: 'none' }}
            src='https://www.facebook.com/tr?id=XXXXXXXXXXXXX&ev=PageView&noscript=1'
          />
        </noscript>
      </body>
    </html>
  );
}
