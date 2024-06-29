import '@/styles/globals.css'

import { GeistSans } from 'geist/font/sans'
import PlausibleProvider from 'next-plausible'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en' className={`${GeistSans.variable}`}>
            <PlausibleProvider domain='paint-calculator.connordinnadge.com' />
            <body>{children}</body>
        </html>
    )
}
