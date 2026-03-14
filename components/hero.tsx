import Link from "next/link"
import { profile } from "@/lib/data"

export function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 md:py-16">
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-pretty text-3xl font-bold leading-tight md:text-4xl">{profile.name}</h1>
          <p className="mt-2 text-muted-foreground">{profile.role}</p>
          <p className="mt-4 leading-relaxed">{profile.summary}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/projects"
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="rounded-md border px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
            >
              Contact Me
            </Link>
            <Link href="/resume" className="rounded-md border px-4 py-2 text-sm font-medium hover:bg-muted">
              View Resume
            </Link>
            <a
              href="/resume/sakthivel-resume.pdf"
              download
              className="rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground hover:opacity-90"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="rounded-xl border p-4 shadow-sm">
          <img
            src="/images/sakthivel-profile.jpg"
            alt="SAKTHIVEL V professional headshot"
            className="mx-auto h-64 w-64 rounded-full object-cover ring-4 ring-primary/20 transition-transform duration-300 hover:scale-[1.02]"
          />
        </div>
      </div>
    </section>
  )
}
