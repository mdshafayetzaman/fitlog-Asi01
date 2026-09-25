import Image from 'next/image'
import Link from 'next/link'
import { IType } from '../lib/types'

interface ExerciseCardProps {
  libaray: IType
}

const ExerciseCard = ({ libaray }: ExerciseCardProps) => {
  return (
    <Link href={`/apps/${libaray.id}`} className="block">
      <article className="group w-full overflow-hidden rounded-2xl bg-[#15171c] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#3a3e47] hover:shadow-2xl">
        {/* Image */}
        <div className="relative h-36 w-full overflow-hidden bg-[#202228]">
          <Image
            src={libaray.image}
            alt={libaray.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 300px"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="px-4 pb-4 pt-3">
          {/* Muscle Groups */}
          <div className="mb-2 flex flex-wrap gap-1.5">
            {libaray.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="inline-flex rounded-md bg-[#b9ff00] px-2 py-1 text-[9px] font-extrabold uppercase tracking-wide text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Name */}
          <h2 className="truncate text-[15px] font-extrabold uppercase tracking-wide text-white">
            {libaray.name}
          </h2>

          {/* Equipment */}
          <p className="mt-1 truncate text-[10px] font-medium text-[#777b85]">
            {libaray.equipment}
          </p>

          <div className="my-3 h-px bg-[#25282e]" />

          {/* Bottom Info */}
          <div className="flex items-center justify-between text-[10px] text-[#a0a3aa]">
            {/* Duration */}
            <div className="flex items-center gap-1.5">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>

              <span>{libaray.duration} min</span>
            </div>

            {/* Calories */}
            <div className="flex items-center gap-1.5">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M13.5 2.5c.3 3.1-1.4 4.5-2.8 6.1-1 1.1-1.8 2.2-1.8 3.8 0 1.2.5 2.2 1.4 3-.1-1.9.7-3.3 1.8-4.5.4 1.5 1.7 2.5 2.7 3.5.9.9 1.4 1.9 1.4 3.1 0 .7-.2 1.4-.5 2 2.1-1.2 3.3-3.3 3.3-5.8 0-3.9-2.3-6.5-5.5-11.2Z" />
                <path d="M7.5 12.5c-1.4 1.4-2.2 3-2.2 4.7 0 2.8 2.2 4.8 5.1 4.8 1.1 0 2.1-.3 2.9-.8-2.4-.6-4.1-2.3-4.1-4.5 0-1.5.7-2.8 1.8-4-.7-.4-1.8-.7-3.5-.2Z" />
              </svg>

              <span>{libaray.caloriesBurned} kcal</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1.5">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
              </svg>

              <span>{libaray.rating}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default ExerciseCard
