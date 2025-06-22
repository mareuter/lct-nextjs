import type { Metadata } from 'next'
import { DateProvider } from '@/app/lib/date_context'
import '@/app/globals.css'

export const metadata: Metadata = {
  title: 'Lunar Club and Lunar II Information',
  description:
    'This program provides general lunar information and availability of features related to the Astronomical League Lunar and Lunar II observing clubs.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <DateProvider>{children}</DateProvider>
      </body>
    </html>
  )
}
