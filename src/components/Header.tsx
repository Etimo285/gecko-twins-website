'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'

import 'flowbite'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslations } from 'next-intl'

export default function Header({ locale }: { locale: string }) {

  const t = useTranslations('header.nav')

  return (
    <nav id="header-nav" className="backdrop-blur-md dark:bg-gray-950/90 py-4 sticky w-full z-20 top-0 left-0">
      <div className="max-w-screen-2xl flex md:flex-row justify-between mx-auto p-4">
        <Link href={'/home'} className="flex items-center">
            <Image src="https://flowbite.com/docs/images/logo.svg" width={50} height={50} className="h-8 mr-3" alt="Flowbite Logo"></Image>
            <span className="header-title self-center text-2xl font-semibold whitespace-nowrap dark:text-white font-serif">Gecko Twins</span>
        </Link>
        <LangDropdown locale={locale} className="font-sans font-bold text-xl ml-16 lg:hidden" />
        <div className="flex md:order-2">
          <button id="burger-btn" data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <div className="lg:items-center lg:justify-between hidden lg:flex lg:order-1">
          <ul id="nav-links" className="flex flex-col lg:text-gray-300 p-4 lg:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 lg:items-center lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-white dark:bg-transparent lg:dark:bg-transparent dark:border-gray-700">
            <NavLink href="/home" displayName={t('home')} isListItem={true} />
            <NavLink href="/games" displayName={t('games')} isListItem={true} />
            <NavLink href="/socials" displayName={t('socials')} isListItem={true} />
            <NavLink href="/team" displayName={t('team')} isListItem={true} />
            <NavLink href="/collaborators" displayName={t('collaborators')} isListItem={true} />
            <NavLink href="/contact" displayName={t('contact')} isListItem={true} />
          </ul>
          <LangDropdown locale={locale} className="font-sans font-bold text-xl ml-16" />
        </div>
      </div>
      {/* MOBILE */}
      <div className="hidden transition-all duration-100" id="navbar-sticky">
          <ul className="flex flex-col w-full p-4 mt-4 font-medium border-gray-100 bg-gray-50 dark:bg-transparent dark:border-gray-700">
            <NavLink href="/home" displayName={t('home')} isListItem={true} />
            <NavLink href="/games" displayName={t('games')} isListItem={true} />
            <NavLink href="/socials" displayName={t('socials')} isListItem={true} />
            <NavLink href="/team" displayName={t('team')} isListItem={true} />
            <NavLink href="/collaborators" displayName={t('collaborators')} isListItem={true} />
            <NavLink href="/contact" displayName={t('contact')} isListItem={true} />
          </ul>
      </div>
    </nav>
  )
}

export const NavLink = ({href, displayName, isListItem}: {href?: string, displayName?: string, isListItem?: boolean}) => {
  
  if (isListItem) {
    return (
      <li>
        <Link href={href ? href : '#'} className="block p-4 group duration-100 hover:text-green-300" aria-current="page">
          <span className="font-mono font-bold text-xl transition-all duration-300">{displayName ? displayName : 'Link'}</span>
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-green-300"></span>
        </Link>
      </li>
    )
  } else {
    return (
      <Link href={href ? href : '#'} className="block p-4 group transition duration-100 hover:text-green-300" aria-current="page">
          <span className="font-mono font-bold text-xl">{displayName ? displayName : 'Link'}</span>
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-green-300"></span>
      </Link>
    )
  }

}

export const LangDropdown = ({locale, className}: {locale: string, className?: string}) => {

  const [lang, setLang] = useState({code: "fr", flag: "france.png"})
  const pathname = usePathname().replace('/en', '')

  useEffect(() => {
    if (locale === "en") {
      setLang({code: "en", flag: "united-kingdom.png"})
    }
  }, [])

  return (
    <div className={className}>
      <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" type="button">
        <Image src={`/flags/${lang.flag}`} alt={`Language of ${lang.code}`} width={20} height={20}/>
        <span className="mx-2 dark:text-gray-300 dark:hover:text-white transition-colors duration-300">{(lang.code).toUpperCase()}</span>
        <FontAwesomeIcon icon={faChevronDown}/>
      </button>
      {/* Dropdown Menu */}
      <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg max-w-44 dark:bg-gray-900 md:dark:shadow-sm">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            <li>
              <Link href={`/en${pathname}`} className="flex flex-row px-4 py-2 transition-all dark:text-gray-200 dark:hover:text-white dark:hover:bg-gray-200/10 mx-3 my-2 rounded-md font-semibold">
                <Image src={`/flags/united-kingdom.png`} alt={`Flag of united kingdom`} width={20} height={10}/>
                <span className="mx-3">English</span>
              </Link>
            </li>
            <li>
              <Link href={`/fr${pathname}`} className="flex flex-row px-4 py-2 transition-all dark:text-gray-200 dark:hover:text-white dark:hover:bg-gray-200/10 mx-3 my-2 rounded-md font-semibold">
                <Image src={`/flags/france.png`} alt={`Flag of france`} width={20} height={10}/>
                <span className="mx-3">Français</span>
              </Link>
            </li>
          </ul>
      </div>
    </div>
  )
}
