import { certifications, education, experience, profile, projects, skills } from "@/lib/data"
import { ResumeActions } from "@/components/resume-actions"
import AutoPrint from "@/components/auto-print"

export default function ResumePage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const raw = searchParams?.download
  const download =
    (typeof raw === "string" && (raw === "1" || raw.toLowerCase() === "true")) ||
    (Array.isArray(raw) && raw.some((v) => v === "1" || v.toLowerCase() === "true"))

  return (
    <main className="mx-auto max-w-4xl px-4 py-10 print:mx-0 print:max-w-none print:px-8">
      <AutoPrint download={Boolean(download)} />

      <ResumeActions download={Boolean(download)} />
      <header className="mb-6 border-b pb-4">
        <h1 className="text-2xl font-bold">{profile.name}</h1>
        <p className="text-sm text-muted-foreground">{profile.address}</p>
        <div className="mt-2 text-sm">
          <span>{profile.phone}</span> • <span>{profile.email}</span>
        </div>
      </header>

      <section className="mb-6">
        <h2 className="text-lg font-semibold">Objective</h2>
        <p className="mt-1 text-sm">{profile.summary}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold">Experience</h2>
        <div className="mt-2 space-y-3">
          {experience.map((e, i) => (
            <div key={i}>
              <div className="flex flex-wrap items-baseline justify-between">
                <strong>
                  {e.title} — {e.company}
                </strong>
                <span className="text-xs text-muted-foreground">{e.period}</span>
              </div>
              <ul className="ml-5 mt-1 list-disc text-sm">
                {e.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold">Education</h2>
        <div className="mt-2 grid gap-2 text-sm">
          {education.map((ed, i) => (
            <div key={i} className="flex items-center justify-between">
              <span>
                {ed.school} — {ed.credential} ({ed.year})
              </span>
              <span>Score: {ed.score}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold">Skills</h2>
        <p className="mt-1 text-sm">{skills.join(", ")}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold">Projects</h2>
        <div className="mt-2 space-y-2 text-sm">
          {projects.map((p) => (
            <div key={p.title}>
              <strong>{p.title}</strong>
              <p className="text-muted-foreground">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold">Certifications</h2>
        <ul className="ml-5 mt-1 list-disc text-sm">
          {certifications.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold">Languages</h2>
        <ul className="ml-5 mt-1 list-disc text-sm">
          {profile.languages.map((l) => (
            <li key={l.name}>
              {l.name} — {l.proficiency}
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-8 hidden print:block text-center text-xs text-muted-foreground">
        Generated portfolio resume — {new Date().getFullYear()}
      </div>
    </main>
  )
}
