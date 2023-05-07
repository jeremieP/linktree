'use client' // Use it to avoid being ServerComponent by design (because we need useEffect)

import Link from 'next/link'
import { VT323 } from 'next/font/google'

import { DeadLink } from '../src/components/DeadLink'
import { useEffect } from 'react'

const VT323Font = VT323({
  weight: "400",
  subsets: ['latin'],
  display: 'swap',
})

export default function NotFound() {
  useEffect(() => {
    const audioRef = new Audio('/deadlink-sound.mp3')
    setTimeout(async () => {
      try {
        await audioRef.play()
      } catch (e) {
        console.error('Promise : Bad timing for Audio')
      }
    }
    , 900)
  }, [])

  return (
    <div className="flex items-center flex-col mx-auto w-full h-screen pt-16 px-8">
      <DeadLink />
      <h1 className={`${VT323Font.className} font-bold mt-4 mb-3 text-6xl text-center text-white`}>Oops ! You found a dead Link !</h1>
      <Link href="/" className={`animate-pulse ${VT323Font.className} font-bold mb-8 text-4xl text-center text-white`}>
        Continue ?
      </Link>
    </div>
  )
}
