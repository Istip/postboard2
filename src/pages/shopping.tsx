import { useEffect } from "react";
import BackgroundPage from "@/components/helpers/background-page";
import ShoppingCardSkeletons from "@/components/shopping/shopping-card/shopping-card-skeletons";
import ReadyItems from "@/components/shopping/shopping-views/ready-items";
import Title from "@/components/ui/title";
import { Button } from "@/components/ui/button";
import { backgrounds } from "@/lib/backgrounds";
import { useShoppingStore } from "@/stores/shopping.store";
import { useShoppingViewStore } from "@/stores/shpoppingview.store";
import { LayoutGrid, LayoutPanelTop } from "lucide-react";
import MarkedItems from "@/components/shopping/shopping-views/marked-items";
import DoneItems from "@/components/shopping/shopping-views/done-items";
import MixedItems from "@/components/shopping/shopping-views/mixed-items";

const ShoppingList = () => {
  const fetchItems = useShoppingStore((state) => state.fetchItems);
  const items = useShoppingStore((state) => state.items);
  const loading = useShoppingStore((state) => state.loading);

  const view = useShoppingViewStore((state) => state.view);
  const setView = useShoppingViewStore((state) => state.setView);

  const isGroupedView = view === "grouped";
  const handleView = () => setView(isGroupedView ? "mixed" : "grouped");

  const readyItems = items.filter((item) => !item.marked && !item.done);
  const markedItems = items.filter((item) => item.marked);
  const doneItems = items.filter((item) => item.done);

  useEffect(() => {
    fetchItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BackgroundPage background={backgrounds.shopping}>
      <div className="flex items-center justify-between mb-2">
        <Title>Shopping list</Title>
        <Button size="icon" onClick={handleView}>
          {isGroupedView ? <LayoutPanelTop /> : <LayoutGrid />}
        </Button>
      </div>
      {loading ? (
        <ShoppingCardSkeletons />
      ) : (
        <>
          {items?.length === 0 && <div>Your shopping list is empty.</div>}
          <>
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
        </>
      )}
    </BackgroundPage>
  );
};

export default ShoppingList;
