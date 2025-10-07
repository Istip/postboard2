import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bookmark, Edit2Icon, SaveIcon, Trash2 } from "lucide-react";
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
      <div>
        {edit ? (
          <form onSubmit={() => {}} onClick={() => setEdit(!edit)}>
            <Input
              value={value}
              autoFocus
              onChange={(e) => setValue(e.target.value)}
            />
          </form>
        ) : (
          <ShoppingCardTitle variant={variant}>
            <div
              className={`${isDefault ? "cursor-pointer" : ""}`}
              onClick={() => isDefault && setEdit(!edit)}
            >
              {item.name}
            </div>
          </ShoppingCardTitle>
        )}
      </div>
      <div className="flex gap-2 w-full">
        <Button size="sm" variant="destructive" onClick={() => {}}>
          <Trash2 />
        </Button>
        <Button variant="outline" size="sm" onClick={() => {}}>
          <Bookmark />
        </Button>
        <Button size="sm" onClick={() => {}}>
          {edit ? <SaveIcon /> : <Edit2Icon />}
        </Button>
      </div>
    </ShoppingCardWrapper>
  );
};

export default ShoppingCard;
