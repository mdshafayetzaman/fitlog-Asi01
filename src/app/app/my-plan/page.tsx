'use client'

import Image from 'next/image'
import React, { useContext, useMemo, useState } from 'react'
import { X } from 'lucide-react'

import { toast } from 'react-toastify'
import { PlanContext } from '@/app/Context/PlanContext'

const PlanStats = () => {
  const { plan, setPlan, saved, setSaved } = useContext(PlanContext)

  const [tab, setTab] = useState<'plan' | 'saved'>('plan')
  const [sortBy, setSortBy] = useState('Duration')

  const totalMinutes = plan.reduce(
    (total, exercise) => total + exercise.duration,
    0,
  )

  const totalCalories = plan.reduce(
    (total, exercise) => total + exercise.caloriesBurned,
    0,
  )

  const sortedPlan = useMemo(() => {
    return [...plan].sort((a, b) => {
      if (sortBy === 'Duration') {
        return a.duration - b.duration
      }

      if (sortBy === 'Calories') {
        return b.caloriesBurned - a.caloriesBurned
      }

      if (sortBy === 'Rating') {
        return (b.rating ?? 0) - (a.rating ?? 0)
      }

      return 0
    })
  }, [plan, sortBy])

  const sortedSaved = useMemo(() => {
    return [...saved].sort((a, b) => {
      if (sortBy === 'Duration') {
        return a.duration - b.duration
      }

      if (sortBy === 'Calories') {
        return b.caloriesBurned - a.caloriesBurned
      }

      if (sortBy === 'Rating') {
        return (b.rating ?? 0) - (a.rating ?? 0)
      }

      return 0
    })
  }, [saved, sortBy])

  const handleRemovePlan = (id: string | number) => {
    setPlan((previous) => previous.filter((item) => item.id !== id))

    toast.success("Removed from today's plan!", {
      position: 'top-right',
      autoClose: 1800,
      theme: 'dark',
    })
  }

  const handleRemoveSaved = (id: string | number) => {
    setSaved((previous) => previous.filter((item) => item.id !== id))

    toast.success('Removed from saved!', {
      position: 'top-right',
      autoClose: 1800,
      theme: 'dark',
    })
  }

  const currentList = tab === 'plan' ? sortedPlan : sortedSaved

  return (
    <div className="container mx-auto mt-10 px-4 pb-10">
      <div>
        <h2 className="font-display text-3xl font-bold uppercase tracking-wide sm:text-4xl">
          My Plan
        </h2>

        <p className="mt-1 text-sm text-[var(--text-muted)]">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <div className="card mt-8 overflow-hidden border border-[#20242b] bg-[#15181e] shadow-xl">
        <div className="grid grid-cols-3">
          <div className="border-r border-[#20242b] p-4 sm:p-6">
            <p className="text-[10px] uppercase tracking-wider text-[#858a94]">
              Exercises
            </p>

            <h2 className="mt-1 text-2xl font-extrabold text-[#baff00] sm:text-3xl">
              {plan.length}
            </h2>
          </div>

          <div className="border-r border-[#20242b] p-4 sm:p-6">
            <p className="text-[10px] uppercase tracking-wider text-[#858a94]">
              Minutes
            </p>

            <h2 className="mt-1 text-2xl font-extrabold text-white sm:text-3xl">
              {totalMinutes}
            </h2>
          </div>

          <div className="p-4 sm:p-6">
            <p className="text-[10px] uppercase tracking-wider text-[#858a94]">
              Calories
            </p>

            <h2 className="mt-1 text-2xl font-extrabold text-white sm:text-3xl">
              {totalCalories}
            </h2>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="tabs tabs-box rounded-xl border border-[#252b34] bg-[#15181d] p-1">
          <button
            onClick={() => setTab('plan')}
            className={`tab h-8 min-h-8 text-xs ${
              tab === 'plan' ? 'bg-[#20252d] text-white' : 'text-[#858b96]'
            }`}
          >
            Today's Plan
          </button>

          <button
            onClick={() => setTab('saved')}
            className={`tab h-8 min-h-8 text-xs ${
              tab === 'saved' ? 'bg-[#20252d] text-white' : 'text-[#858b96]'
            }`}
          >
            Saved
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] text-[#858b96]">Sort By</span>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="select select-sm w-[115px] border-[#252b34] bg-[#15181d] text-xs text-white"
          >
            <option>Duration</option>
            <option>Calories</option>
            <option>Rating</option>
          </select>
        </div>
      </div>

      {currentList.length === 0 && (
        <div className="mt-5 flex min-h-[277px] items-center justify-center rounded-2xl border border-dashed border-[#282d35] bg-[#0d0f12] px-5">
          <div className="text-center">
            <h1 className="text-xl font-black tracking-wide sm:text-2xl">
              {tab === 'plan' ? 'NOTHING HERE YET' : 'NO SAVED WORKOUTS'}
            </h1>

            <p className="mt-2 text-xs text-[#858991] sm:text-sm">
              {tab === 'plan'
                ? 'Browse the library and add a lift to get today moving.'
                : 'Save workouts from the library to see them here.'}
            </p>

            <button
              type="button"
              className="btn mt-5 h-9 min-h-9 rounded-full border-0 bg-[#c8ff00] px-6 text-xs font-bold text-black hover:bg-[#bdf000]"
            >
              Go to workouts
            </button>
          </div>
        </div>
      )}

      {currentList.length > 0 && (
        <div className="mt-5 flex flex-col gap-4">
          {currentList.map((exercise) => (
            <div
              key={exercise.id}
              className="group relative flex min-h-[104px] w-full items-center overflow-hidden rounded-2xl border border-[#252b34] bg-[#15181e] p-3 shadow-lg transition duration-300 hover:border-[#baff00]"
            >
              <div className="h-[82px] w-[130px] shrink-0 overflow-hidden rounded-xl bg-[#0d0f12] sm:h-[90px] sm:w-[150px]">
                <Image
                  src={exercise.image}
                  alt={exercise.name}
                  width={500}
                  height={300}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="min-w-0 flex-1 px-4">
                <h3 className="truncate text-sm font-extrabold uppercase tracking-wide text-white sm:text-base">
                  {exercise.name}
                </h3>

                <p className="mt-1 text-[11px] text-[#858a94]">Medicine Ball</p>

                <div className="mt-2 flex flex-wrap items-center gap-3 text-[10px] text-[#c6c9cf]">
                  <span className="flex items-center gap-1">
                    <span className="text-[#c8ff00]">◷</span>
                    {exercise.duration} min
                  </span>

                  <span className="flex items-center gap-1">
                    <span className="text-[#c8ff00]">♨</span>
                    {exercise.caloriesBurned} kcal
                  </span>

                  <span className="flex items-center gap-1">
                    <span className="text-[#c8ff00]">★</span>
                    {exercise.rating ?? 0}
                  </span>
                </div>
              </div>

              <div className="hidden items-center gap-3 sm:flex">
                <button
                  type="button"
                  className="rounded-full border border-[#343942] px-4 py-2 text-[10px] font-medium text-[#d1d4d9] transition hover:bg-[#20242b]"
                >
                  View Details
                </button>

                <button
                  type="button"
                  onClick={() =>
                    tab === 'plan'
                      ? handleRemovePlan(exercise.id)
                      : handleRemoveSaved(exercise.id)
                  }
                  className="rounded-full border border-red-500/30 px-5 py-2 text-[10px] font-bold text-red-400 transition hover:bg-red-500/10"
                >
                  Remove
                </button>
              </div>

              <button
                type="button"
                onClick={() =>
                  tab === 'plan'
                    ? handleRemovePlan(exercise.id)
                    : handleRemoveSaved(exercise.id)
                }
                className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full text-[#747a84] transition hover:bg-[#252a31] hover:text-white sm:hidden"
              >
                <X size={14} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default PlanStats
