import { ArticlesListSkeleton } from "@/components/articles-list-skeleton"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container my-6" aria-hidden>
      <Skeleton className="h-6 w-32 rounded" />
      <Skeleton className="mb-6 mt-2 h-60 w-full rounded" />
      <Skeleton className="my-6 h-12 w-10/12 rounded" />
      <div className="my-6 ml-6 space-y-4 rounded">
        <Skeleton className="h-4 w-6/12 rounded" />
        <Skeleton className="h-4 w-8/12 rounded" />
        <Skeleton className="h-4 w-10/12 rounded" />
        <Skeleton className="h-4 w-7/12 rounded" />
      </div>
      <div className="mt-6 w-full space-y-4 rounded">
        <Skeleton className="h-4 w-full rounded" />
        <Skeleton className="h-4 w-10/12 rounded" />
        <Skeleton className="h-4 w-11/12 rounded" />
        <Skeleton className="h-4 w-9/12 rounded" />
      </div>
      <div className="mt-6 w-full space-y-4 rounded">
        <Skeleton className="h-4 w-11/12 rounded" />
        <Skeleton className="h-4 w-10/12 rounded" />
        <Skeleton className="h-4 w-11/12 rounded" />
        <Skeleton className="h-4 w-9/12 rounded" />
      </div>
      <div className="mt-6 w-full space-y-4 rounded">
        <Skeleton className="h-4 w-full rounded" />
        <Skeleton className="h-4 w-10/12 rounded" />
        <Skeleton className="h-4 w-11/12 rounded" />
        <Skeleton className="h-4 w-9/12 rounded" />
      </div>
      <div className="mt-6 w-full space-y-4 rounded">
        <Skeleton className="h-4 w-full rounded" />
        <Skeleton className="h-4 w-10/12 rounded" />
        <Skeleton className="h-4 w-11/12 rounded" />
        <Skeleton className="h-4 w-9/12 rounded" />
      </div>
      <div className="mt-6 space-y-6 border-t py-6">
        <Skeleton className="mx-auto h-4 w-4/12 rounded" />
        <ArticlesListSkeleton length={2} />
      </div>
    </div>
  )
}
