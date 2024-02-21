"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Suspense } from "react"
import { SearchForm } from "./search-form"
import { SearchFormSkeleton } from "./search-form-skeleton"
import { Typography } from "./ui/typography"

export function Header() {
  const pathname = usePathname()
  const logoIsTitle = pathname === "/"

  return (
    <header className="border-b py-4">
      <div className="container flex flex-col items-center gap-y-4 max-sm:py-2 sm:flex-row sm:justify-between">
        <Typography
          as={logoIsTitle ? "h1" : "div"}
          variant="h3"
          className="text-center leading-none text-primary sm:text-left"
        >
          <Link href="/">La Esquina del Código</Link>
          <br />
          <Typography as="span" variant="smallText">
            Un blog de Carlos Reyes Web
          </Typography>
        </Typography>
        <Suspense fallback={<SearchFormSkeleton />}>
          <SearchForm />
        </Suspense>
      </div>
    </header>
  )
}
