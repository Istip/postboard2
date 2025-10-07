const Title = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => {
  return (
    <h1 className={`text-md heading text-primary ${className}`}>{children}</h1>
  );
};

export default Title;
