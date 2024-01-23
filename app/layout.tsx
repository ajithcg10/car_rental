import type { Metadata } from 'next'
import './globals.css'
import ReduxProvider from './componets/redux/Provider'



export const metadata: Metadata = {
  title: 'Car Rental',
  description: 'we are provide amzing car collections',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body><ReduxProvider>{children}</ReduxProvider></body>
    </html>
  )
}
