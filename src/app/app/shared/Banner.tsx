import Image from 'next/image'

import bannerImage from '../apps/assets/banner.png'

export default function Banner() {
  return (
    <section className="bg-[#0d0f12]">
      <div className="container mx-auto max-w-6xl px-5 py-8">
        <div className="flex min-h-[340px] items-center justify-between overflow-hidden rounded-xl border border-[#292d35] bg-[#15181d] px-9 py-8 sm:px-10 lg:px-14">
          {/* Content */}
          <div className="flex max-w-xl flex-col items-start">
            <span className="mb-4 text-[9px] font-bold uppercase tracking-[0.12em] text-[#B6FF00]">
              Workout Library
            </span>

            <h1 className="font-display text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-[46px]">
              Train with intent. Log
              <br />
              every set.
            </h1>

            <p className="mt-4 max-w-md text-xs leading-5 text-[#9CA3AF] sm:text-sm">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>

            <a
              href="#library"
              className="mt-5 inline-flex items-center gap-2 rounded-md bg-[#B6FF00] px-4 py-2 text-[10px] font-bold uppercase tracking-wide text-black transition-all duration-200 hover:scale-105"
            >
              Browse Workouts
            </a>
          </div>

          {/* Image */}
          <div className="relative hidden h-[280px] w-[280px] shrink-0 sm:block">
            <Image
              src={bannerImage}
              alt="Illustration of an athlete using a resistance machine"
              fill
              priority
              sizes="280px"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
