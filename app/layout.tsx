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
  metadataBase: new URL('https://dance-studio-prototype.vercel.app'),

  title: 'Lovely Dance Beauty & Fitness  Vomero, Napoli',
  description:
    'Corsi di danza, fitness e benessere nel cuore del Vomero. ' +
    'Uno spazio accogliente dove movimento, energia e femminilità si incontrano.',

  openGraph: {
    type: 'website',
    url: 'https://dance-studio-prototype.vercel.app',
    siteName: 'Lovely Dance Beauty & Fitness',
    title: 'Lovely Dance Beauty & Fitness  Vomero, Napoli',
    description:
      'Corsi di danza, fitness e benessere nel cuore del Vomero. ' +
      'Uno spazio accogliente dove movimento, energia e femminilità si incontrano.',
    images: [
      {
        url: '/additional/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lovely Dance Beauty & Fitness  Vomero, Napoli',
      },
    ],
    locale: 'it_IT',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Lovely Dance Beauty & Fitness  Vomero, Napoli',
    description:
      'Corsi di danza, fitness e benessere nel cuore del Vomero. ' +
      'Uno spazio accogliente dove movimento, energia e femminilità si incontrano.',
    images: ['/additional/og-image.jpg'],
  },

  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },

  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#9557C2',
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
