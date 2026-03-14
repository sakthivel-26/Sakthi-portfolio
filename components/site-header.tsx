"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="font-semibold text-xl tracking-tight">
          <span className="text-sky-600">S</span>akthivel
        </Link>

        <nav className="hidden items-center gap-4 md:flex" aria-label="Main navigation">
          {nav.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-2 py-1 text-sm font-medium transition-colors hover:text-sky-600",
                  active ? "text-foreground ring-1 ring-sky-600/40" : "text-muted-foreground",
                )}
              >
                {item.label}
              </Link>
            )
          })}
          <a
            href="https://github.com/sakthivel-26"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md px-2 py-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            aria-label="GitHub profile"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sakthivel-v-124558342?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md px-2 py-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            aria-label="LinkedIn profile"
          >
            LinkedIn
          </a>
          <a
            href="https://huggingface.co/sakthivel26"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md px-2 py-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Hugging Face profile"
          >
            Hugging Face
          </a>
          <ThemeToggle />
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t">
          <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-md px-2 py-2 text-sm",
                  pathname === item.href ? "text-foreground ring-1 ring-sky-600/40" : "text-muted-foreground",
                )}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://github.com/sakthivel-26"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md px-2 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sakthivel-v-124558342?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md px-2 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
            <a
              href="https://huggingface.co/sakthivel26"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md px-2 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Hugging Face
            </a>
            <div className="pt-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
