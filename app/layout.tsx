import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Toaster } from '../components/ui/sonner'

export const metadata: Metadata = {
  title: 'Emmetra',
  description: 'AI-Powered Image Quality Tuning Automation for Vision Systems',
  generator: 'Pj Vineeth',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Toaster richColors closeButton position="top-center" />
        <Analytics />
      </body>
    </html>
  )
}
