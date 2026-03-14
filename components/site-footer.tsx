import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 py-6 md:flex-row">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Sakthivel V. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <Link href="/contact" className="hover:text-sky-600">
            Contact
          </Link>
          <Link href="/about" className="hover:text-sky-600">
            About
          </Link>
        </div>
      </div>
    </footer>
  )
}
