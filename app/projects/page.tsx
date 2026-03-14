import { ProjectGrid } from "@/components/project-grid"

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <header className="mb-8">
        <h1 className="text-pretty text-3xl font-bold">Projects</h1>
        <p className="mt-2 text-muted-foreground">
          Selected work in AI, EV systems, banking, and privacy-preserving analytics
        </p>
      </header>
      <ProjectGrid />
    </main>
  )
}
