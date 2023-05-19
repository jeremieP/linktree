import '../src/styles/globals.css'

import type { Metadata } from 'next'
import { get } from '@vercel/edge-config'
import { SeoData } from '../src/types'

import { Analytics } from '@vercel/analytics/react'

interface RootLayoutProps {
  children: React.ReactNode
}

export async function generateMetadata(): Promise<Metadata> {
  const data: SeoData = await get('linktree-seo') || await import('../src/data/seo.json')
  return {
    icons: '/favicon.ico',
    title: data.title,
    description: data.description,
    viewport: 'width=device-width, initial-scale=1',
  }
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        </body>
    </html>
  )
}