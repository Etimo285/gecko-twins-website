'use client'

import React from 'react'
import Image from 'next/image'

import { faKickstarter, faDiscord, faTwitter, faYoutube, faTwitch } from '@fortawesome/free-brands-svg-icons'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header() {

    const t = useTranslations('footer')

    return (
        <footer className="bg-white dark:bg-gray-950/90">
            <div className="mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                    <Link href="/home" className="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="FlowBite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Gecko Twins</span>
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{t('resources.title')}</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <Link href="/home" className="hover:underline">{t('resources.home')}</Link>
                            </li>
                            <li>
                                <Link href="/games" className="hover:underline">{t('resources.games')}</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{t('about.title')}</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <Link href="/team" className="hover:underline ">{t('about.team')}</Link>
                            </li>
                            <li>
                                <Link href="/collaborators" className="hover:underline">{t('about.collaborators')}</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{t('legal.title')}</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <Link href="#" className="hover:underline">{t('legal.privacy')}</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:underline">{t('legal.terms')}</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Gecko Twins</a>. {t('reserved')}.
                </span>
                <div className="flex mt-4 space-x-5 items-center sm:justify-center sm:mt-0">
                    <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        <FontAwesomeIcon className="w-4 h-4" icon={faKickstarter} />
                        <span className="sr-only">Kickstarter page</span>
                    </Link>
                    <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        <FontAwesomeIcon className="w-4 h-4" icon={faDiscord} />
                        <span className="sr-only">Discord community</span>
                    </Link>
                    <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        <FontAwesomeIcon className="w-4 h-4" icon={faTwitter} />
                        <span className="sr-only">Twitter account</span>
                    </Link>
                    <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        <FontAwesomeIcon className="w-4 h-4" icon={faYoutube} />
                        <span className="sr-only">Youtube account</span>
                    </Link>
                    <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        <FontAwesomeIcon className="w-4 h-4" icon={faTwitch} />
                        <span className="sr-only">Twitch account</span>
                    </Link>
                </div>
            </div>
            </div>
        </footer>
    )
}
