const Title = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => {
  return (
    <h1 className={`text-2xl heading text-primary py-4 ${className}`}>
      {children}
    </h1>
  );
};

export default Title;
