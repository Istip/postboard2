interface Props {
  children?: string;
  variant?: "accent" | "primary";
}

const Divider = ({ children, variant = "accent" }: Props) => {
  const textColor =
    variant === "accent" ? "text-accent-foreground" : "text-primary-foreground";

  if (children && children.length > 2) {
    return (
      <div className="center gap-2">
        <div className="h-[1px] w-full bg-secondary rounded-full my-4"></div>
        <div className={`text-[10px] ${textColor}`}>{children}</div>
        <div className="h-[1px] w-full bg-secondary rounded-full my-4"></div>
      </div>
    );
  }
  return <div className="h-[1px] w-full bg-secondary rounded-full my-4" />;
};

export default Divider;
