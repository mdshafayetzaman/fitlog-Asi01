import Image from 'next/image'
import logo from '../apps/assets/logo.png'

export default function Footer() {
  return (
    <footer className="">
      <div className="container max-w-6xl mx-auto px-5 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-3">
            <Image
              src={logo}
              alt="Fitlog Logo"
              width={40}
              height={40}
              className="rounded-full"
            />

            <div>
              <h2 className="text-lg font-bold">Fitlog</h2>

              <p className="text-sm text-gray-400">
                Your fitness journey starts here.
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-400">
            © 2026 Fitlog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
