'use client'


import React, { createContext, ReactNode, useState } from 'react'
import { IType } from '../app/lib/types'

type PlanContextType = {
  plan: IType[]
  setPlan: React.Dispatch<React.SetStateAction<IType[]>>
  saved: IType[]
  setSaved: React.Dispatch<React.SetStateAction<IType[]>>
}

export const PlanContext = createContext<PlanContextType>({
  plan: [],
  setPlan: () => {},
  saved: [],
  setSaved: () => {},
})

const PlanProvider = ({ children }: { children: ReactNode }) => {
  const [plan, setPlan] = useState<IType[]>([])
  const [saved, setSaved] = useState<IType[]>([])

  return (
    <PlanContext.Provider
      value={{
        plan,
        setPlan,
        saved,
        setSaved,
      }}
    >
      {children}
    </PlanContext.Provider>
  )
}

export default PlanProvider
