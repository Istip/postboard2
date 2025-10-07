import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bookmark, InfoIcon, Trash } from "lucide-react";
import { useState, useMemo } from "react";
import {
  ShoppingCardWrapper,
  ShoppingCardTitle,
} from "@/components/shopping/shopping-card-components";

interface Props {
  item: Shopping;
}

const ShoppingCard = ({ item }: Props) => {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(item.name);

  const isDefault = !item.done && !item.marked;

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
              className={`${isDefault ? "cursor-pointer" : ""} w-full`}
              onClick={() => isDefault && setEdit(!edit)}
            >
              {item.name}
            </div>
            <Button size="sm" variant="ghost" onClick={() => {}}>
              <InfoIcon />
            </Button>
          </ShoppingCardTitle>
        )}
      </>
      <div className="flex gap-2 w-full">
        <Button size="sm" variant="destructive" onClick={() => {}}>
          <Trash />
        </Button>
        <Button variant="outline" size="sm" onClick={() => {}}>
          <Bookmark />
        </Button>
      </div>
    </ShoppingCardWrapper>
  );
};

export default ShoppingCard;
