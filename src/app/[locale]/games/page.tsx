'use client'

import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import { GameCard } from './GameCard'

import gamesData from './gamesData.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'next-i18next'

export default function Games() {

  const [games, setGames] = useState(gamesData)
  
  useEffect(() => {
    document.querySelector('#games-list')?.parentElement?.classList.replace('max-w-screen-2xl', 'w-full')
  })

  return (
    <div id="games-list" className="h-full overflow-scroll lg:overflow-hidden flex flex-col lg:items-stretch items-center lg:flex-row scroll-smooth">
      {games.map((game, index) => {

        // Test for specific entry amount
        //if (index >= 3) return

        return (
            <GameCard data={game} size="large" />
        )
      })}
      {games.length >= 3 &&
        <>
          <Scroller position='left' />
          <Scroller position='right' />
        </>
      }

    </div>
  )
}

export const Scroller = ({ position } : { position:string }) => {

  const [parentHeight, setParentHeight] = useState(0)

  useEffect(() => {
    setParentHeight(document.getElementById('games-list')?.offsetHeight as number)
  })

  function scrollOnClick(value: number) {
    let list = document.querySelector('#games-list')!
    list.scroll(list.scrollLeft + value, 0)
    
    list.scrollLeft <= 0
      ? document.querySelector('#btn-left')?.classList.add('hidden')
      : document.querySelector('#btn-left')?.classList.remove('hidden')

    list.scrollLeft >= list.scrollWidth - list.clientWidth
      ? document.querySelector('#btn-right')?.classList.add('hidden')
      : document.querySelector('#btn-right')?.classList.remove('hidden')
  }

  if (position === "left") {
    return (
      <button type='button' style={{height: parentHeight + 'px'}} id='btn-left' onClick={(e) => { scrollOnClick(-1800) }} className="hidden lg:flex justify-center items-center bg-gradient-to-r from-gray-900 to-transparent w-16 fixed left-0 cursor-pointer transition hover:bg-gray-900/50">
        <FontAwesomeIcon icon={faChevronLeft} className="text-3xl font-bold" />
      </button>
    )
  } else if (position === "right") {
    return (
      <button type='button' style={{height: parentHeight + 'px'}} id='btn-right' onClick={() => { scrollOnClick(1800) }} className="hidden lg:flex justify-center items-center bg-gradient-to-l from-gray-900 to-transparent w-16 fixed right-0 cursor-pointer transition hover:bg-gray-900/50">
        <FontAwesomeIcon icon={faChevronRight} className="text-3xl font-bold" />
      </button>
    )
  }

}
