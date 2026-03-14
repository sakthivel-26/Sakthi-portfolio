"use client"

import { useMemo, useState } from "react"
import { projects } from "@/lib/data"

const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort()

export function ProjectGrid() {
  const [active, setActive] = useState<string | "All">("All")

  const filtered = useMemo(() => {
    if (active === "All") return projects
    return projects.filter((p) => p.tags.includes(active as string))
  }, [active])

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-2">
        <FilterChip label="All" active={active === "All"} onClick={() => setActive("All")} />
        {allTags.map((t) => (
          <FilterChip key={t} label={t} active={active === t} onClick={() => setActive(t)} />
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((p, i) => (
          <article
            key={i}
            className="group rounded-xl border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md hover:ring-1 hover:ring-primary/30"
          >
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-md bg-primary/10 px-2 py-0.5 text-xs text-primary">
                  {t}
                </span>
              ))}
            </div>
            <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">{p.description}</p>

            {"url" in p && p.url ? (
              <div className="mt-4">
                <a
                  href={p.url as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${p.title} repository`}
                  className="inline-flex items-center gap-1 rounded-md bg-primary px-3 py-1.5 text-sm text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  View Repo <span aria-hidden>↗</span>
                </a>
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </div>
  )
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={
        active
          ? "rounded-md bg-primary px-3 py-1.5 text-sm text-primary-foreground shadow-sm transition-colors"
          : "rounded-md border px-3 py-1.5 text-sm transition-colors hover:bg-accent/10 hover:text-accent"
      }
      aria-pressed={active}
    >
      {label}
    </button>
  )
}
