import './globals.css'
import { Merriweather } from 'next/font/google'

const merriweather = Merriweather({ subsets: ['latin'], weight: ["400", "700", "900"], })

export const metadata = {
  title: 'TRON GIVES',
  description: '',
  favicon: '/favicon.ico',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${merriweather.className} max-w-xl`}>{children}</body>
    </html >
  )
}
