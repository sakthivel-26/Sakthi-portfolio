import { cn } from "@/lib/utils"
import { skills, projects, experience } from "@/lib/data"

type Stat = {
  label: string
  value: number | string
}

function formatExperienceCount(): number | string {
  // If you prefer "1+ yrs", you can switch to a computed year value.
  // Here we use total experience entries as a baseline.
  // If your experience array includes dates, you can enhance this later.
  try {
    if (Array.isArray(experience)) {
      return experience.length
    }
  } catch {}
  return 0
}

function formatSkillsCount(): number {
  try {
    if (Array.isArray(skills)) return skills.length
  } catch {}
  return 0
}

function formatProjectsCount(): number {
  try {
    if (Array.isArray(projects)) return projects.length
  } catch {}
  return 0
}

export function Stats({ className }: { className?: string }) {
  const items: Stat[] = [
    { label: "Experience", value: formatExperienceCount() },
    { label: "Core Skills", value: formatSkillsCount() },
    { label: "Projects", value: formatProjectsCount() },
  ]

  return (
    <section aria-label="Quick stats" className={cn("mx-auto w-full max-w-5xl px-4 md:px-6", className)}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.label}
            className="rounded-xl border bg-card text-card-foreground p-5 shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
          >
            <div className="text-3xl font-semibold tracking-tight">{item.value}</div>
            <div className="mt-1 text-sm text-muted-foreground">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
