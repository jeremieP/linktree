import Head from 'next/head'
import Link from 'next/link'
import { VT323 } from 'next/font/google'

import { DeadLink } from '../src/components/DeadLink'

import data from '../src/data/index.json'
import { useEffect } from 'react'

const VT323Font = VT323({
  weight: "400",
  subsets: ['latin'],
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
    <>
      <Head>
        <title>{data.seo.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={data.seo.description} />
      </Head>
      <div className="flex items-center flex-col mx-auto w-full h-screen pt-16 px-8">
        <DeadLink />
        <h1 className={`${VT323Font.className} font-bold mt-4 mb-3 text-6xl text-center text-white`}>Oops ! You found a dead Link !</h1>
        <Link href="/" className={`animate-pulse ${VT323Font.className} font-bold mb-8 text-4xl text-center text-white`}>
          Continue ?
        </Link>
      </div>
    </>
  )
}
