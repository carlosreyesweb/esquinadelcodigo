import { Search } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { useDebouncedCallback } from "use-debounce"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

export function SearchForm() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const handleSearch = useDebouncedCallback((search: string) => {
    const params = new URLSearchParams(searchParams)
    if (search) {
      params.set("search", search)
    } else {
      params.delete("search")
    }
    router.push(`/?${params.toString()}`)
  }, 300)

  return (
    <search>
      <form role="search" className="flex items-center gap-x-2">
        <Label htmlFor="search" className="sr-only">
          Búsqueda
        </Label>
        <Input
          id="search"
          name="search"
          type="search"
          placeholder="Buscar posts..."
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={searchParams.get("search")?.toString()}
        />
        <Button
          type="submit"
          size="icon"
          variant="outline"
          className="shrink-0"
        >
          <Search className="h-5 w-5" />
          <span className="sr-only">Buscar</span>
        </Button>
      </form>
    </search>
  )
}
