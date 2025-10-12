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
import ShoppingEmpty from "@/components/shopping/shopping-empty";

const ShoppingList = () => {
  const fetchItems = useShoppingStore((state) => state.fetchItems);
  const items = useShoppingStore((state) => state.items);

  const view = useShoppingViewStore((state) => state.view);

  const isGroupedView = view === "grouped";

  const readyItems = items.filter((item) => !item.marked && !item.done);
  const markedItems = items.filter((item) => item.marked);
  const doneItems = items.filter((item) => item.done);

  const emptyBasket = items?.length === 0;

  useEffect(() => {
    fetchItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BackgroundPage background={backgrounds.shopping}>
      <ShoppingTitle isGroupedView={isGroupedView} emptyBasket={emptyBasket} />
      {emptyBasket && <ShoppingEmpty />}
      {isGroupedView ? (
        <>
          <MarkedItems items={markedItems} />
          <ReadyItems items={readyItems} />
          <DoneItems items={doneItems} />
        </>
      ) : (
        <MixedItems items={items} />
      )}
    </BackgroundPage>
  );
};

export default ShoppingList;
