import { SkillBadges } from "@/components/skill-badges"

export default function SkillsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <header className="mb-8">
        <h1 className="text-pretty text-3xl font-bold">Skills</h1>
        <p className="mt-2 text-muted-foreground">Technologies and tools I work with</p>
      </header>
      <SkillBadges />
    </main>
  )
}
