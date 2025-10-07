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
      "p-4 space-y-4 bg-background/50 border dark:border-background border-foreground/15 backdrop-blur-sm rounded-lg shadow",
    marked: "p-4 space-y-4 bg-primary border border-primary rounded-lg",
    done: "p-4 space-y-4 bg-foreground/5 border border-foreground/30 backdrop-blur-xl rounded-lg opacity-30",
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
