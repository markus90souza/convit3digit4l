import '@/styles/globals.css'
import type { Metadata } from 'next'
import type { FC, ReactNode } from 'react'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Seu evento começa aqui',
  description: 'App para criação de eventos',
}

type RootLayoutProps = {
  children: ReactNode
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.className} antisluged`}>{children}</body>
    </html>
  )
}

export default RootLayout
