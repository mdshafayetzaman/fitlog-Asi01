import type { Metadata } from 'next'
import './globals.css'

import Footer from './shared/footer'
import Navbar from './shared/navbar'

import { ToastContainer } from 'react-toastify'
import PlanProvider from '../Context/PlanContext'

export const metadata: Metadata = {
  title: 'FITLOG',
  description: 'Your personal fitness workout tracker',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <PlanProvider>
          <Navbar />

          <main>{children}</main>

          <Footer />
        </PlanProvider>
        <ToastContainer />
      </body>
    </html>
  )
}
