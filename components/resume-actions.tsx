"use client"

type ResumeActionsProps = {
  download?: boolean
}

export function ResumeActions({ download }: ResumeActionsProps) {
  const handlePrint = () => {
    try {
      window.print()
    } catch {
      // no-op
    }
  }

  return (
    <div className="mb-4 flex items-center justify-end gap-2 print:hidden">
      <a
        href="/resume/sakthivel-resume.pdf"
        download
        className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
        aria-label="Download latest resume"
      >
        Download Resume
      </a>
      <button onClick={handlePrint} className="rounded-md border px-3 py-2 text-sm font-medium hover:bg-accent/10">
        Print
      </button>
    </div>
  )
}
