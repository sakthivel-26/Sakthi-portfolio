"use client"

import { profile } from "@/lib/data"

export function ContactCard() {
  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      alert("Copied to clipboard")
    } catch {
      alert("Copy failed")
    }
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="rounded-md border p-4">
        <h3 className="font-semibold">Reach me</h3>
        <p className="mt-2 text-sm text-muted-foreground">{profile.address}</p>
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between">
            <a className="text-sky-700 hover:underline dark:text-sky-300" href={`tel:${profile.phone}`}>
              {profile.phone}
            </a>
            <button onClick={() => copy(profile.phone)} className="rounded-md border px-2 py-1 text-xs">
              Copy
            </button>
          </div>
          <div className="flex items-center justify-between">
            <a className="text-sky-700 hover:underline dark:text-sky-300" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <button onClick={() => copy(profile.email)} className="rounded-md border px-2 py-1 text-xs">
              Copy
            </button>
          </div>
        </div>

        {profile.links?.length ? (
          <div className="mt-4">
            <h4 className="text-sm font-medium">Online</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {profile.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border px-2 py-1 text-xs hover:bg-accent hover:text-accent-foreground"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </div>

      <div className="rounded-md border p-4">
        <h3 className="font-semibold">Languages</h3>
        <ul className="mt-2 space-y-1 text-sm">
          {profile.languages.map((l) => (
            <li key={l.name} className="flex items-center justify-between">
              <span>{l.name}</span>
              <span className="text-muted-foreground">{l.proficiency}</span>
            </li>
          ))}
        </ul>
        <h3 className="mt-6 font-semibold">Interests</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {profile.interests.map((i) => (
            <span key={i} className="rounded-md border px-2 py-1 text-xs">
              {i}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
