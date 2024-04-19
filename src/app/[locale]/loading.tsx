'use client'

import Image from "next/image"
import { useState } from "react";

export default function Loading() {
    
    const [dots, setDots] = useState("")

    setInterval(function() {dots === "..." ? setDots("") : setDots(dots + "."); }, 500)

    return (
        <div className="flex items-center p-6 sm:p-12 dark:bg-gray-900 dark:text-gray-100">
            <Image src="https://flowbite.com/docs/images/logo.svg" width={50} height={50} className="h-8 mr-3" alt="Load Spinner"></Image>
            <p className="font-bold">{`Loading ${dots}`}</p>
        </div>
    )
}