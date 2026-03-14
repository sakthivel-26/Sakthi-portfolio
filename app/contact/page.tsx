import { ContactCard } from "@/components/contact-card"
import { profile } from "@/lib/data"

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <header className="mb-8">
        <h1 className="text-pretty text-3xl font-bold">Contact</h1>
        <p className="mt-2 text-muted-foreground">Let’s connect for opportunities and collaboration</p>
      </header>
      <ContactCard />
      <section className="mt-8 rounded-md border p-4">
        <h2 className="font-semibold">Quick actions</h2>
        <div className="mt-3 flex flex-wrap gap-3">
          <a
            className="rounded-md bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-700"
            href={`mailto:${profile.email}`}
          >
            Email Me
          </a>
          <a
            className="rounded-md border px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
            href={`tel:${profile.phone}`}
          >
            Call Me
          </a>
        </div>
      </section>
    </main>
  )
}
