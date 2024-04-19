import { Suspense } from 'react';
import Header from '@/components/Header'
import './globals.css'

import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
import Footer from '@/components/Footer';
import Loading from './loading';
import { useRouter, useParams, notFound } from 'next/navigation';
import Head from 'next/head';
import { NextIntlClientProvider } from 'next-intl';

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'fr'}];
}

config.autoAddCss = false; 

export default async function LocaleLayout({
  children, params
}: {
  children: React.ReactNode, params: { locale: string }
}) {

  const { locale } = params

  let messages;
  try {
    messages = (await import(`../../localization/${locale}.json`)).default
  } catch (error) {
    notFound() // send to 404
  }

  return (
    <html lang={locale}>
      <body style={{ backgroundImage: `url(/cool-background.png)`}}>
        <NextIntlClientProvider locale={locale ?? "fr"} messages={messages}>
          <Header locale={locale} />
          <main className="h-full">
            <Suspense fallback={ <Loading /> }>
              {children}
            </Suspense>
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
