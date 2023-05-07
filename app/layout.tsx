import '../src/styles/globals.css'
import data from '../src/data/index.json'

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata = {
  icon: {
    path: '/favicon.ico',
  },
  title: data.seo.title,
  description: data.seo.description,
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}