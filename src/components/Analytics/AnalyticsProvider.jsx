'use client';

import Script from 'next/script';
import Image from 'next/image';

export default function AnalyticsProvider() {
  return (
    <>
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

      {/* Google Analytics */}
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

      {/* Meta Pixel (Facebook) */}
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

      {/* ✅ UTM Tracking Script */}
      <Script
        id='utm-tracking'
        strategy='afterInteractive'
      >
        {`
          (function () {
            const EXPIRY_DAYS = 28;
            const now = Date.now();
            const urlParams = new URLSearchParams(window.location.search);
            const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];

            function setWithExpiry(key, value, ttlDays) {
              const item = {
                value: value,
                expiry: now + ttlDays * 24 * 60 * 60 * 1000, // days → ms
              };
              localStorage.setItem("utm_" + key, JSON.stringify(item)); // full object
              localStorage.setItem("plain_utm_" + key, value); // also save plain string
            }

            function getWithExpiry(key) {
              const itemStr = localStorage.getItem("utm_" + key);
              if (!itemStr) return null;
              try {
                const item = JSON.parse(itemStr);
                if (now > item.expiry) {
                  localStorage.removeItem("utm_" + key);
                  localStorage.removeItem("plain_utm_" + key);
                  return null;
                }
                return item.value;
              } catch {
                return null;
              }
            }

            // ✅ Store or replace UTMs
            utmParams.forEach(param => {
              const value = urlParams.get(param);
              const key = param.replace('utm_', ''); // e.g., source, medium
              if (value) {
                setWithExpiry(key, value, EXPIRY_DAYS);
              }
            });

            // ✅ Build global object
            window.utmData = {};
            utmParams.forEach(param => {
              const key = param.replace('utm_', '');
              window.utmData[key] = getWithExpiry(key);
            });

            // ✅ Debug log
            console.log("✅ Stored UTM Parameters:", window.utmData);

            // ✅ Debug helper
            window.showUTM = () => console.log("UTM Data:", window.utmData);
          })();
        `}
      </Script>

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
    </>
  );
}
