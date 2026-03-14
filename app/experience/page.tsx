import { Timeline } from "@/components/timeline"

export default function ExperiencePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <header className="mb-8">
        <h1 className="text-pretty text-3xl font-bold">Experience</h1>
        <p className="mt-2 text-muted-foreground">Quality, AI&ML engineering, and cloud practice</p>
      </header>
      <Timeline />
    </main>
  )
}
