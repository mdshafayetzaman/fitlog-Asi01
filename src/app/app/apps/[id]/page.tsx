import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Star } from 'lucide-react'

import SavedButton from '@/app/components/Apps/SavedButton'
import { getLibrary } from '@/app/lib/api'
import { IType } from '@/app/lib/types'
import AddToCartButton from '@/app/components/Apps/AddToCartButton'

type TPlanDetails = {
  params: Promise<{
    id: string
  }>
}

const PlanDetails = async ({ params }: TPlanDetails) => {
  const { id } = await params

  const getallPlan: IType[] = await getLibrary()

  const plan = getallPlan.find((item: IType) => String(item.id) === String(id))

  if (!plan) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0d0f12] px-5 text-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Exercise not found</h1>

          <p className="mt-2 text-sm text-[#858a94]">
            No exercise found with ID: {id}
          </p>
        </div>
      </div>
    )
  }

  return (
    <section className="min-h-screen bg-[#0d0f12] px-4 py-6 text-white sm:px-5 sm:py-8">
      <div className="mx-auto max-w-5xl">
        {/* BACK TO HOME */}
        <Link
          href="/"
          className="mb-4 inline-flex items-center gap-2 rounded-lg border border-[#292e36] bg-[#15181e] px-3.5 py-2 text-xs font-semibold text-[#d1d4d9] transition hover:border-[#baff00] hover:bg-[#1b1f25] hover:text-[#baff00]"
        >
          <ArrowLeft size={14} />
          Back to Home
        </Link>

        {/* MAIN CARD */}
        <div className="rounded-xl border border-[#20242b] bg-[#101216] p-3 sm:p-5">
          <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-2 lg:gap-6">
            {/* LEFT IMAGE */}
            <div className="overflow-hidden rounded-xl border border-[#252a31] bg-[#17191e]">
              <Image
                src={plan.image}
                alt={plan.name}
                width={800}
                height={600}
                priority
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="flex flex-col">
              {/* TITLE */}
              <h1 className="text-2xl font-extrabold uppercase tracking-tight text-white sm:text-3xl">
                {plan.name}
              </h1>

              {/* DESCRIPTION */}
              <p className="mt-2 max-w-2xl text-xs leading-5 text-[#858a94] sm:text-sm">
                {plan.description}
              </p>

              {/* MUSCLE GROUPS */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {plan.muscleGroups.map((muscle: string) => (
                  <span
                    key={muscle}
                    className="rounded-full bg-[#baff00] px-2.5 py-1 text-[9px] font-bold text-black"
                  >
                    {muscle}
                  </span>
                ))}
              </div>

              {/* DETAILS */}
              <div className="mt-4 overflow-hidden rounded-xl border border-[#242831] bg-[#15181e]">
                <div className="flex items-center justify-between gap-3 border-b border-[#242831] px-3 py-2.5">
                  <span className="text-[9px] font-semibold uppercase tracking-wider text-[#8c919b]">
                    Equipment
                  </span>

                  <span className="text-right text-[11px] font-medium text-[#e4e6e9]">
                    {plan.equipment}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3 border-b border-[#242831] px-3 py-2.5">
                  <span className="text-[9px] font-semibold uppercase tracking-wider text-[#8c919b]">
                    Difficulty
                  </span>

                  <span className="text-right text-[11px] font-medium text-[#e4e6e9]">
                    {plan.difficulty}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3 border-b border-[#242831] px-3 py-2.5">
                  <span className="text-[9px] font-semibold uppercase tracking-wider text-[#8c919b]">
                    Sets
                  </span>

                  <span className="text-right text-[11px] font-medium text-[#e4e6e9]">
                    {plan.sets}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3 border-b border-[#242831] px-3 py-2.5">
                  <span className="text-[9px] font-semibold uppercase tracking-wider text-[#8c919b]">
                    Reps
                  </span>

                  <span className="text-right text-[11px] font-medium text-[#e4e6e9]">
                    {plan.reps}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3 border-b border-[#242831] px-3 py-2.5">
                  <span className="text-[9px] font-semibold uppercase tracking-wider text-[#8c919b]">
                    Duration
                  </span>

                  <span className="text-right text-[11px] font-medium text-[#e4e6e9]">
                    {plan.duration} min
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3 border-b border-[#242831] px-3 py-2.5">
                  <span className="text-[9px] font-semibold uppercase tracking-wider text-[#8c919b]">
                    Calories
                  </span>

                  <span className="text-right text-[11px] font-medium text-[#e4e6e9]">
                    {plan.caloriesBurned} kcal
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3 px-3 py-2.5">
                  <span className="text-[9px] font-semibold uppercase tracking-wider text-[#8c919b]">
                    Rating
                  </span>

                  <div className="flex items-center gap-1 text-[11px] font-medium text-[#e4e6e9]">
                    <Star size={12} />
                    {plan.rating}
                  </div>
                </div>
              </div>

              {/* INSTRUCTIONS */}
              <div className="mt-4">
                <h2 className="text-[10px] font-extrabold uppercase tracking-wider text-white">
                  Instructions
                </h2>

                <ol className="mt-2 space-y-1.5">
                  {plan.instructions.map(
                    (instruction: string, index: number) => (
                      <li
                        key={index}
                        className="flex gap-2.5 text-[11px] leading-4 text-[#9a9ea7]"
                      >
                        <span className="min-w-[14px] text-[#d2d5da]">
                          {index + 1}.
                        </span>

                        <span>{instruction}</span>
                      </li>
                    ),
                  )}
                </ol>
              </div>

              {/* BUTTONS */}
              <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
                <AddToCartButton exercise={plan} />

                <SavedButton exercise={plan} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlanDetails
