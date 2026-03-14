import { profile } from "@/lib/data"
import { EducationList } from "@/components/education-list"

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <header className="mb-8">
        <h1 className="text-pretty text-3xl font-bold">About</h1>
        <p className="mt-2 text-muted-foreground">{profile.summary}</p>
      </header>

      <section className="mb-10">
        <h2 className="text-xl font-semibold">Education</h2>
        <p className="mt-1 text-sm text-muted-foreground">Academic background and scores</p>
        <div className="mt-4">
          <EducationList />
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Location</h2>
        <p className="mt-2">{profile.location}</p>
      </section>
    </main>
  )
}
