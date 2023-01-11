import type { Link } from '../types'
import type { ReactElement } from 'react'
import Image from 'next/image'

export const LinkCard = ({ url, image, title }: Link):ReactElement => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center p-1 w-full rounded-full hover:scale-105 transition-all bg-gray-100 mb-3 max-w-3xl"
  >
    <div className="flex text-center w-full">
      <div className="w-10 h-10">
        {image && (
          <Image
            className="rounded-full"
            alt={title}
            src={image}
            width={40}
            height={40}
          />
        )}
      </div>
      <h2 className="flex justify-center items-center font-semibold w-full text-gray-700 -ml-10">
        {title}
      </h2>
    </div>
  </a>
)