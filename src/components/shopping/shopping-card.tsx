import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bookmark, CheckCircle, InfoIcon, Trash } from "lucide-react";
import { useState, useMemo } from "react";
import {
  ShoppingCardWrapper,
  ShoppingCardTitle,
} from "@/components/shopping/shopping-card-components";
import { useShoppingStore } from "@/stores/shopping.store";

interface Props {
  item: Shopping;
}

const ShoppingCard = ({ item }: Props) => {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(item.name);

  const deleteItem = useShoppingStore((state) => state.deleteItem);
  const updateItem = useShoppingStore((state) => state.updateItem);

  const isDefault = !item.done && !item.marked;

  const handleRemove = () => {
    deleteItem(item.$id);
  };

  const handleMarked = () => {
    updateItem(item.$id, { marked: !item.marked });
  };

  const handleDone = () => {
    updateItem(item.$id, { done: !item.done });
  };

  const variant = useMemo(() => {
    if (item.done) return "done";
    if (item.marked) return "marked";

    return "default";
  }, [item.done, item.marked]);

  return (
    <ShoppingCardWrapper
      variant={variant}
      className="flex flex-col justify-between"
    >
      <>
        {edit ? (
          <form onSubmit={() => {}} onClick={() => setEdit(!edit)}>
            <Input
              value={value}
              autoFocus
              onChange={(e) => setValue(e.target.value)}
            />
          </form>
        ) : (
          <ShoppingCardTitle variant={variant} className="flex gap-2 w-full">
            <div
              className={`${
                isDefault ? "cursor-pointer" : ""
              } w-full my-auto leading-5`}
              onClick={() => isDefault && setEdit(!edit)}
            >
              {item.name}
            </div>
            <Button size="sm" variant="ghost" onClick={() => console.log(item)}>
              <InfoIcon />
            </Button>
          </ShoppingCardTitle>
        )}
      </>
      <div className="flex gap-2 w-full justify-between">
        <Button size="sm" variant="destructive" onClick={handleRemove}>
          <Trash />
        </Button>
        <div className="space-x-1">
          <Button
            variant={item.marked ? "default" : item.done ? "ghost" : "outline"}
            size="sm"
            onClick={handleMarked}
          >
            <Bookmark />
          </Button>
          <Button
            variant={item.done ? "ghost" : item.marked ? "default" : "outline"}
            size="sm"
            onClick={handleDone}
          >
            <CheckCircle />
          </Button>
        </div>
      </div>
    </ShoppingCardWrapper>
  );
};

export default ShoppingCard;
