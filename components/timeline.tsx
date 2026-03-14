import { experience } from "@/lib/data"

export function Timeline() {
  return (
    <ol className="relative border-s ps-6">
      {experience.map((item, i) => (
        <li key={i} className="mb-8">
          <span className="absolute -start-2 mt-1.5 h-3 w-3 rounded-full bg-primary" aria-hidden />
          <div className="rounded-md border p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-semibold">
                {item.title} — {item.company}
              </h3>
              <span className="text-xs text-muted-foreground">{item.period}</span>
            </div>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              {item.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  )
}
