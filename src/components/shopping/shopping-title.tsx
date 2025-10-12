import { useShoppingViewStore } from "@/stores/shpoppingview.store";
import { Button } from "@/components/ui/button";
import { LayoutGrid, LayoutPanelTop } from "lucide-react";
import Title from "@/components/ui/title";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Props {
  isGroupedView: boolean;
  emptyBasket: boolean;
}

const ShoppingTitle = ({ isGroupedView, emptyBasket }: Props) => {
  const setView = useShoppingViewStore((state) => state.setView);

  const handleView = () => setView(isGroupedView ? "mixed" : "grouped");

  return (
    <div className="flex items-center justify-between mb-2">
      <Title>Shopping list</Title>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="icon" onClick={handleView} disabled={emptyBasket}>
            {isGroupedView ? <LayoutGrid /> : <LayoutPanelTop />}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          {isGroupedView ? "Switch to mixed view" : "Switch to group view"}
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export default ShoppingTitle;
