import type React from "react"
import { Hero } from "@/components/hero"
import { experience, skills, projects } from "@/lib/data"
import { BriefcaseBusiness, BadgeCheck, FolderGit2 } from "lucide-react"

export default function Page() {
  const stats = [
    { title: "Experience", value: experience?.length ?? 0, Icon: BriefcaseBusiness },
    { title: "Core Skills", value: skills?.length ?? 0, Icon: BadgeCheck },
    { title: "Projects", value: projects?.length ?? 0, Icon: FolderGit2 },
  ]

  return (
    <main>
      <Hero />
      <section className="mx-auto max-w-5xl px-4 pb-12">
        <div className="grid gap-4 md:grid-cols-3">
          {stats.map(({ title, value, Icon }) => (
            <Stat key={title} title={title} value={value} Icon={Icon} />
          ))}
        </div>
      </section>
    </main>
  )
}

function Stat({
  title,
  value,
  Icon,
}: {
  title: string
  value: string | number
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}) {
  return (
    <div
      className="rounded-xl border bg-card text-card-foreground p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
      role="group"
      aria-label={title}
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <div className="text-3xl font-semibold leading-none tracking-tight">{value}</div>
          <div className="mt-1 text-sm text-muted-foreground">{title}</div>
        </div>
      </div>
    </div>
  )
}
