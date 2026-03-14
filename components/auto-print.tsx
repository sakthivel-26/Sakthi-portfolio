"use client"

import { useEffect } from "react"

export default function AutoPrint({ download }: { download: boolean }) {
  useEffect(() => {
    if (download) {
      try {
        window.print()
      } catch {
        // no-op
      }
    }
  }, [download])

  return null
}
