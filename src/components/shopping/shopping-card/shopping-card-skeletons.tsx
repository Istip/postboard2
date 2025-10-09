import { Skeleton } from "@/components/ui/skeleton";

const ShoppingCardSkeletons = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
      {Array.from({ length: 12 }).map((_, index) => (
        <Skeleton key={index} className="h-30 w-full" />
      ))}
    </div>
  );
};

export default ShoppingCardSkeletons;
