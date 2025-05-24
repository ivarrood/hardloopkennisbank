import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/layout/Navigation'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Hardloop Kennisbank',
  description: 'Een uitgebreide kennisbank voor hardlooptrainers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className={`${inter.variable} font-sans`}>
        <div className="min-h-screen bg-gray-50">
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  )
} 