'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

export const GameCard = ({data, size}: {data: any, size:string}) => {

  const t = useTranslations('games')

  return (
    <div className="flex flex-col lg:max-h-full m-6 bg-gray-800 border border-gray-900 rounded-lg transform transition duration-300 hover:scale-105"
    style={{minWidth: '30%', width: '90%' }}>
        <div>
            <Image className="rounded-t-lg w-full max-h-64 bg-cover object-cover" width={400} height={400} src={data.coverPath} alt="" />
        </div>
        <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">{data.name}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.description.length >= 500 ? data.description.slice(0, 500) + ' ...' : data.description}</p>
            <iframe className="w-full" src={`https://store.steampowered.com/widget/${data.gameId}/`} frameBorder="0" width={600} height={190}></iframe>
            {/** <a href={`https://store.steampowered.com/app/${data.gameId}/`}>
              <button type='button' className="w-full lg:hidden mt-4 mb-8 py-2 border border-black rounded-lg bg-gradient-to-tl from-green-700 to-green-600">Voir la page du magasin</button>
            </a> **/}
            <small className='font-normal absolute bottom-3 left-3 text-gray-700 dark:text-gray-400'>{t('release')} : {data.releaseDate}</small>
        </div>
    </div>
  )
}
