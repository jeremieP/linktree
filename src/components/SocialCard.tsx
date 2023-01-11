import type { Social } from '../types'
import type { ReactElement } from 'react'
import dynamic from 'next/dynamic'

const TwitterIcon = dynamic(() => import('./Icons/TwitterIcon').then((module) => module.TwitterIcon))
const GithubIcon = dynamic(() => import('./Icons/GithubIcon').then((module) => module.GithubIcon))
const LinkedinIcon = dynamic(() => import('./Icons/LinkedinIcon').then((module) => module.LinkedinIcon))

const getIconComponent = (url:string): ReactElement => {
  switch(true) {
    case url.includes('twitter'):
      return <TwitterIcon />
      
    case url.includes('github'):
      return <GithubIcon /> 

    case url.includes('linkedin'):
      return <LinkedinIcon /> 

    default:
      return <></>
  }
}

export const SocialCard = ({ url, title }: Social):ReactElement => (
  <a
    aria-label={`${title} link`}
    key={url}
    href={url}
    target="_blank"
    rel="noopener noreferrer"
  >
    {getIconComponent(url)}
  </a>
)