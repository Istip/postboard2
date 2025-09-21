const Divider = ({ children }: { children?: string }) => {
  if (children && children.length > 2) {
    return (
      <div className="center gap-2">
        <div className="h-[1px] w-full bg-secondary rounded-full my-2"></div>
        <div className="text-[10px] text-primary">{children}</div>
        <div className="h-[1px] w-full bg-secondary rounded-full my-2"></div>
      </div>
    );
  }
  return <div className="h-[1px] w-full bg-secondary rounded-full my-2" />;
};

export default Divider;
