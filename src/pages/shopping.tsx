import { useEffect } from "react";
import BackgroundPage from "@/components/helpers/background-page";
import ReadyItems from "@/components/shopping/shopping-views/ready-items";
import { backgrounds } from "@/lib/backgrounds";
import { useShoppingStore } from "@/stores/shopping.store";
import { useShoppingViewStore } from "@/stores/shpoppingview.store";
import MarkedItems from "@/components/shopping/shopping-views/marked-items";
import DoneItems from "@/components/shopping/shopping-views/done-items";
import MixedItems from "@/components/shopping/shopping-views/mixed-items";
import ShoppingTitle from "@/components/shopping/shopping-title";

const ShoppingList = () => {
  const fetchItems = useShoppingStore((state) => state.fetchItems);
  const items = useShoppingStore((state) => state.items);

  const view = useShoppingViewStore((state) => state.view);

  const isGroupedView = view === "grouped";

  const readyItems = items.filter((item) => !item.marked && !item.done);
  const markedItems = items.filter((item) => item.marked);
  const doneItems = items.filter((item) => item.done);

  useEffect(() => {
    fetchItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BackgroundPage background={backgrounds.shopping}>
      <>
        {items?.length === 0 && (
          <div className="my-2 text-center">Your shopping list is empty.</div>
        )}
        <ShoppingTitle isGroupedView={isGroupedView} />
        {isGroupedView ? (
          <>
            <MarkedItems items={markedItems} />
            <ReadyItems items={readyItems} />
            <DoneItems items={doneItems} />
          </>
        ) : (
          <MixedItems items={items} />
        )}
      </>
    </BackgroundPage>
  );
};

export default ShoppingList;
