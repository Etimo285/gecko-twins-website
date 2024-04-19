'use client'

import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import Link from 'next/link'

export const Social = ({ slug, icon }: { slug: string, icon: IconDefinition }) => {

  return (
    <Link href={{ pathname: '/socials', query: { page: slug }} } className="social-link w-full border border-gray-700 social-skew flex justify-center items-center h-12 dark:bg-gray-800 text-white">
      <FontAwesomeIcon icon={icon} className="transform text-white transition-all social-icon"/>
      <span className="pl-6 font-mono font-semibold text-md">{slug.slice(0, 1).toUpperCase() + slug.slice(1, slug.length )}</span>
    </Link>
  )

}


