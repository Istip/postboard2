import ShoppingCarousel from "@/components/shopping/shopping-carousel";

interface Props {
  items: Shopping[];
}

const MarkedItems = ({ items }: Props) => {
  return (
    <>
      {items?.length > 0 && (
        <div className="mb-4">
          <h2 className="mb-2 font-semibold text-lg heading">Marked items</h2>
          <ShoppingCarousel items={items} />
        </div>
      )}
    </>
  );
};

export default MarkedItems;
