import type { Metadata, Viewport } from 'next'
import { DM_Sans, Dancing_Script, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  style: ['normal', 'italic'],
})

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing',
  weight: '600',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.lovelydance.it'),
  title: 'Lovely Dance Beauty & Fitness | Vomero',
  description: 'Corsi di danza, fitness e benessere nel cuore del Vomero. Uno spazio accogliente dove movimento, energia e femminilità si incontrano.',
  keywords: 'Lovely Dance Vomero, danza Vomero, fitness Vomero, yoga Vomero, pilates Vomero, salsa Napoli, bachata Napoli, benessere Napoli',
  authors: [{ name: 'Lovely Dance' }],
  creator: 'Lovely Dance',
  publisher: 'Lovely Dance Beauty & Fitness',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Lovely Dance Beauty & Fitness | Vomero',
    description: 'Danza, fitness e benessere nel cuore del Vomero. Prenota una lezione di prova.',
    url: 'https://www.lovelydance.it',
    siteName: 'Lovely Dance',
    locale: 'it_IT',
    type: 'website',
    images: [
      {
        url: '/OGimage.jpg',
        width: 1200,
        height: 630,
        alt: 'Lovely Dance Beauty & Fitness',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lovely Dance Beauty & Fitness | Vomero',
    description: 'Corsi di danza, fitness e benessere nel cuore del Vomero.',
    images: ['/OGimage.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it" className={`${dmSans.variable} ${playfair.variable} ${dancingScript.variable}`}>
      <body className="font-sans antialiased" suppressHydrationWarning={true}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
