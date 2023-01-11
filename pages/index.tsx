import Head from 'next/head'
import Image from 'next/image'
import { LinkCard } from '../src/components/LinkCard'
import { SocialCard } from '../src/components/SocialCard'

import data from '../src/data/index.json'

export default function Home() {
  return (
    <>
      <Head>
        <title>{data.seo.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={data.seo.description} />
      </Head>
      <div className="flex items-center flex-col mx-auto w-full h-screen pt-16 px-8">
        <Image
          priority
          className="rounded-full"
          alt={data.me.name}
          src={data.me.avatar}
          width={120}
          height={120}
        />
        <h1 className="font-bold mt-4 mb-1 text-xl text-white">{data.me.name}</h1>
        <h2 className="font-bold mb-8 text-xl text-white">
          {data.me.job.title} - <a className="underline hover:no-underline" href={data.me.job.url} target="_blank" rel="noopener noreferrer">{data.me.job.company}</a>
        </h2>
        {data.links.map((link) => (
          <LinkCard key={link.url} {...link} />
        ))}
        <div className="flex items-center gap-4 mt-8 text-white">
          {data.socials.map((social) => (
            <SocialCard key={social.url} {...social} />
          ))}
        </div>
      </div>
    </>
  )
}
