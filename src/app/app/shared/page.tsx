'use client'

import { PlanContext } from '@/Context/PlanContext'
import React, { useContext } from 'react'

const PlanStats = () => {
  const { plan } = useContext(PlanContext)

  const totalMinutes = plan.reduce(
    (total, exercise) => total + exercise.duration,
    0,
  )

  const totalCalories = plan.reduce(
    (total, exercise) => total + exercise.caloriesBurned,
    0,
  )

  return (
    <div className="rounded-xl border border-[#20242b] bg-[#15181e]">
      <div className="grid grid-cols-3">
        {/* Exercises */}
        <div className="border-r border-[#20242b] px-4 py-5">
          <p className="text-[9px] text-[#858a94]">Exercises</p>

          <h2 className="mt-1 text-2xl font-extrabold text-[#baff00]">
            {plan.length}
          </h2>
        </div>

        {/* Minutes */}
        <div className="border-r border-[#20242b] px-4 py-5">
          <p className="text-[9px] text-[#858a94]">Minutes</p>

          <h2 className="mt-1 text-2xl font-extrabold text-white">
            {totalMinutes}
          </h2>
        </div>

        {/* Calories */}
        <div className="px-4 py-5">
          <p className="text-[9px] text-[#858a94]">Calories</p>

          <h2 className="mt-1 text-2xl font-extrabold text-white">
            {totalCalories}
          </h2>
        </div>
      </div>
    </div>
  )
}

export default PlanStats
