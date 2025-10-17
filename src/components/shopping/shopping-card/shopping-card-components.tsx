import { cn } from "@/lib/utils";

type ShoppingCardVariant = "default" | "marked" | "done";

export const ShoppingCardWrapper = ({
  children,
  variant = "default",
  className,
}: {
  children: React.ReactNode;
  variant?: ShoppingCardVariant;
  className?: string;
}) => {
  const variantStyles = {
    default:
      "p-2 space-y-4 bg-background/50 border dark:border-background border-foreground/15 backdrop-blur-sm rounded-xl shadow",
    marked: "p-2 space-y-4 bg-primary/80 border border-primary rounded-xl",
    done: "p-2 space-y-4 bg-foreground/20 border border-dashed border-foreground/50 backdrop-blur-sm rounded-xl opacity-40",
  };

  return (
    <div className={cn(variantStyles[variant], className)}>{children}</div>
  );
};

export const ShoppingCardTitle = ({
  children,
  variant = "default",
  className,
}: {
  children: React.ReactNode;
  variant?: ShoppingCardVariant;
  className?: string;
}) => {
  const variantStyles = {
    default: "text-sm font-regular",
    marked: "text-sm font-bold text-background",
    done: "text-sm font-regular text-foreground/50",
  };

  return (
    <div className={cn(variantStyles[variant], className)}>{children}</div>
  );
};
