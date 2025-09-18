const Error = ({ children }: { children: string }) => {
  return (
    <div className="bg-destructive text-sm text-stone-950 text-center p-2 border border-red-800">
      {children}
    </div>
  );
};

export default Error;
