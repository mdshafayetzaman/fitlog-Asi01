'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useContext, useState } from 'react'
import logo from '@/app/apps/assets/logo.png'
import { PlanContext } from '@/Context/PlanContext'

const NAV_LINKS = [
  { href: '/#library', label: 'Workout', match: '/' },
  { href: '/my-plan', label: 'My Plan', match: '/my-plan' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const { plan, saved } = useContext(PlanContext)

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0d0d0f] text-white">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image src={logo} alt="FitLog logo" width={28} height={28} />

          <span className="text-xl font-semibold tracking-wide">FITLOG</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.match

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm uppercase tracking-wider ${
                  active ? 'text-[#c8ff00]' : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          {/* Plan */}
          <div className="hidden items-center gap-2 md:flex">
            <Link href="/plan" className="text-xs text-gray-400">
              Plan
            </Link>

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#c8ff00] px-1 text-[10px] font-bold text-black">
              {plan.length}
            </span>
          </div>

          {/* Saved */}
          <div className="hidden items-center gap-2 md:flex">
            <span className="text-xs text-gray-400">Saved</span>

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-white/10 px-1 text-[10px] text-gray-400">
              {saved.length}
            </span>
          </div>

          {/* Mobile Menu */}
          <div className="relative md:hidden">
            <button
              onClick={() => setOpen(!open)}
              type="button"
              className="text-2xl text-white"
            >
              ⋮
            </button>

            {open && (
              <div className="absolute right-0 top-9 z-50 w-32 rounded-lg border border-white/10 bg-[#161619] p-2">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
