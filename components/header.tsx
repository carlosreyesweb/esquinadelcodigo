"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SearchForm } from "./search-form";
import { Typography } from "./ui/typography";

export function Header() {
  const pathname = usePathname();
  const logoIsTitle = pathname === "/";

  return (
    <header className="border-b py-4">
      <div className="container max-sm:py-2 flex flex-col items-center sm:flex-row sm:justify-between gap-y-4">
        <Typography
          as={logoIsTitle ? "h1" : "div"}
          variant="h3"
          className="text-primary leading-none text-center sm:text-left"
        >
          <Link href="/">La Esquina del Código</Link>
          <br />
          <Typography as="span" variant="smallText">
            Un blog de Carlos Reyes Web
          </Typography>
        </Typography>
        <SearchForm />
      </div>
    </header>
  );
}
