import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container-px flex flex-col items-center justify-center gap-4 py-32 text-center">
      <span className="font-display text-6xl font-bold text-[var(--accent)]">
        404
      </span>
      <h1 className="font-display text-2xl font-bold uppercase tracking-wide">
        Page not found
      </h1>
      <p className="max-w-sm text-[var(--text-muted)]">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-2 inline-flex items-center rounded-full bg-[var(--accent)] px-6 py-3 font-display text-sm font-semibold uppercase tracking-wide text-[var(--accent-ink)]"
      >
        Back to home
      </Link>
    </div>
  )
}
