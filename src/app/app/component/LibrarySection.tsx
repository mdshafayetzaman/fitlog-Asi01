import React from 'react'
import { getLibrary } from '../lib/api'
import ExerciseCard from '../shared/LibraryCard'
import { IType } from '../lib/types'

const LibrarySection = async () => {
  const libarays: IType[] = await getLibrary()

  return (
    <section className="container mx-auto max-w-6xl mt-10 px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {libarays.map((libaray) => (
          <ExerciseCard key={libaray.id} libaray={libaray} />
        ))}
      </div>
    </section>
  )
}

export default LibrarySection
