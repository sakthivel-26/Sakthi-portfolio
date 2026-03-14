import { education } from "@/lib/data"

export function EducationList() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {education.map((ed, i) => (
        <div key={i} className="rounded-md border p-4">
          <h3 className="font-semibold">{ed.school}</h3>
          <p className="text-sm text-muted-foreground">
            {ed.credential} • {ed.year}
          </p>
          <p className="mt-2 text-sm">
            Score: <span className="font-medium">{ed.score}</span>
          </p>
        </div>
      ))}
    </div>
  )
}
