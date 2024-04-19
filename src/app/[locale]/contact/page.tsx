'use client';
 
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
 
export default function Contact() {
  
  const t = useTranslations('contact')

  return (
    <section className="bg-white dark:bg-gray-900/90">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">{t('title')}</h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-300 sm:text-xl">{t('subtitle')}</p>
          <form action="#" className="space-y-8">
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{t('email.label')}</label>
                <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder={t('email.placeholder')} required />
            </div>
            <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{t('subject.label')}</label>
                <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder={t('subject.placeholder')} required />
            </div>
            <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t('message.label')}</label>
                <textarea id="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder={t('message.placeholder')}></textarea>
            </div>
            <div className="flex items-center mb-4">
                <input id="agree-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required/>
                <p className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{t('agree.prefix')} <Link href="/terms" className="text-teal-400">{t('agree.terms')}</Link> {t('agree.inbetween')} <Link href="/privacy" className="text-teal-400">{t('agree.privacy')}</Link>.</p>
            </div>
            <button type="submit" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-800 dark:hover:border-teal-600 dark:focus:ring-gray-700">
              <FontAwesomeIcon icon={faEnvelope} className="mr-4 text-base"/>
              {t('send')}
            </button>
          </form>
      </div>
    </section>
  );
}
