import type { Social } from '../types'
import type { ReactElement } from 'react'
import dynamic from 'next/dynamic'

const TwitterIcon = dynamic(() => import('./TwitterIcon').then((module) => module.TwitterIcon))
const GithubIcon = dynamic(() => import('./GithubIcon').then((module) => module.GithubIcon))

export const SocialCard = ({ url, title }: Social):ReactElement => (
  <a
    aria-label={`${title} link`}
    key={url}
    href={url}
    target="_blank"
    rel="noopener noreferrer"
  >
    {
      url.includes('twitter') ? (
        <TwitterIcon />
      ) : url.includes('github') ? (
        <GithubIcon />
      ) : null
    }
  </a>
)