import { Skeleton } from "./ui/skeleton"

export function ArticlesListSkeleton({ length }: { length: number }) {
  return (
    <div className="space-y-4" aria-hidden>
      {Array.from({ length }).map((_, index) => (
        <div key={index} className="space-y-4 border bg-card px-5 py-4">
          <Skeleton className="h-16 w-full rounded" />
          <Skeleton className="h-8 w-7/12 rounded" />
          <Skeleton className="h-4 w-1/4 rounded" />
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 3 }).map((_, index) => (
              <Skeleton key={index} className="h-[22px] w-12 rounded" />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
