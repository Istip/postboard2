import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "dark:bg-background/50 bg-foreground/20 animate-pulse rounded-md",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
