import { Skeleton } from "./ui/skeleton";

export function ArticlesListSkeleton() {
  return (
    <div className="space-y-4" aria-hidden>
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="space-y-4 px-5 py-4 border bg-card">
          <Skeleton className="rounded h-16 w-full" />
          <Skeleton
            className="rounded h-8"
            style={{ width: generateRandomWidth() }}
          />
          <Skeleton className="rounded h-4 w-1/4" />
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 3 }).map((_, index) => (
              <Skeleton key={index} className="rounded h-[22px] w-12" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function generateRandomWidth() {
  return `${Math.floor(Math.random() * 100) + 1}%`;
}
