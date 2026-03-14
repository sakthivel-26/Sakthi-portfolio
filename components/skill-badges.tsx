import { skills, certifications } from "@/lib/data"

export function SkillBadges() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-2 text-sm font-medium text-muted-foreground">Core Skills</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <span key={s} className="inline-flex items-center rounded-md border bg-background px-3 py-1 text-sm">
              {s}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium text-muted-foreground">Certifications</h3>
        <div className="flex flex-wrap gap-2">
          {certifications.map((c) => (
            <span
              key={c}
              className="inline-flex items-center rounded-md border border-amber-500 bg-amber-50 px-3 py-1 text-sm text-amber-800 dark:border-amber-400 dark:bg-amber-950/30 dark:text-amber-300"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
