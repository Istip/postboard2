import BackgroundPage from "@/components/helpers/background-page";
import ShoppingCard from "@/components/shopping/shopping-card";
import ShoppingCardSkeletons from "@/components/shopping/shopping-card-skeletons";
import ShoppingCarousel from "@/components/shopping/shopping-carousel";
import Title from "@/components/ui/title";
import { backgrounds } from "@/lib/backgrounds";
import { useShoppingStore } from "@/stores/shopping.store";
import { useEffect } from "react";

const ShoppingList = () => {
  const fetchItems = useShoppingStore((state) => state.fetchItems);
  const items = useShoppingStore((state) => state.items);
  const loading = useShoppingStore((state) => state.loading);

  const markedItems = items.filter((item) => item.marked);

  useEffect(() => {
    fetchItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BackgroundPage background={backgrounds.shopping}>
      <Title className="mb-2">Shopping list</Title>
      {loading ? (
        <ShoppingCardSkeletons />
      ) : (
        <>
          {items?.length === 0 && <div>Your shopping list is empty.</div>}
          {markedItems?.length > 0 && (
            <div className="mb-4">
              <h2 className="mb-2 font-semibold text-lg heading">
                Marked items
              </h2>
              <ShoppingCarousel items={markedItems} />
            </div>
          )}
          <>
            <h2 className="mb-2 font-semibold text-lg heading">All items</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
              {items?.length > 0 &&
                items.map((item) => (
                  <ShoppingCard key={item.$id} item={item} />
                ))}
            </div>
          </>
        </>
      )}
    </BackgroundPage>
  );
};

export default ShoppingList;
