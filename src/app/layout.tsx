import type { Metadata } from 'next'
import './globals.css'


import { ToastContainer } from 'react-toastify'
import Navbar from './app/shared/navbar'
import Footer from './app/shared/footer'


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
