import { useShoppingViewStore } from "@/stores/shpoppingview.store";
import { Button } from "@/components/ui/button";
import { LayoutGrid, LayoutPanelTop } from "lucide-react";
import Title from "@/components/ui/title";

interface Props {
  isGroupedView: boolean;
}

const ShoppingTitle = ({ isGroupedView }: Props) => {
  const setView = useShoppingViewStore((state) => state.setView);

  const handleView = () => setView(isGroupedView ? "mixed" : "grouped");

  return (
    <div className="flex items-center justify-between mb-2">
      <Title>Shopping list</Title>
      <Button size="icon" onClick={handleView}>
        {isGroupedView ? <LayoutGrid /> : <LayoutPanelTop />}
      </Button>
    </div>
  );
};

export default ShoppingTitle;
