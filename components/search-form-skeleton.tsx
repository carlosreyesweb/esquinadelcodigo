import { Skeleton } from "./ui/skeleton"

export function SearchFormSkeleton() {
  return (
    <div className="flex w-[233px] gap-x-2">
      <Skeleton className="h-10 w-5/6" />
      <Skeleton className="h-10 w-1/6" />
    </div>
  )
}
