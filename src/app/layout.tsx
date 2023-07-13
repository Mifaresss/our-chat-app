import { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './styles/globals.css'
import './styles/reset.css'

export const metadata: Metadata = {
   title: 'Our Chat',
   description: 'The Our Chat app',
}

const roboto = Roboto({
   weight: ['300', '500', '700'],
   style: ['normal'],
   subsets: ['cyrillic'],
   display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang='uk'>
         <body className={roboto.className} suppressHydrationWarning={true}>
            {children}
         </body>
      </html>
   )
}
