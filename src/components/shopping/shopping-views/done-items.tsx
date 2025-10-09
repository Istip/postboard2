import ShoppingCard from "@/components/shopping/shopping-card/shopping-card";

interface Props {
  items: Shopping[];
}

const DoneItems = ({ items }: Props) => {
  return (
    <>
      {items.length > 0 && (
        <>
          <h2 className="my-2 font-semibold text-lg heading">Recent items</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
            {items?.length > 0 &&
              items.map((item) => <ShoppingCard key={item.$id} item={item} />)}
          </div>
        </>
      )}
    </>
  );
};

export default DoneItems;
