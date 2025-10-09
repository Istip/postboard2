import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bookmark, CheckCircle, Edit, InfoIcon, Trash } from "lucide-react";
import { useState, useMemo, useRef, useEffect } from "react";
import {
  ShoppingCardWrapper,
  ShoppingCardTitle,
} from "@/components/shopping/shopping-card/shopping-card-components";
import { useShoppingStore } from "@/stores/shopping.store";
import { toast } from "sonner";

interface Props {
  item: Shopping;
}

const ShoppingCard = ({ item }: Props) => {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(item.name);

  const inputRef = useRef<HTMLInputElement>(null);

  const isDefault = !item.done && !item.marked;

  const deleteItem = useShoppingStore((state) => state.deleteItem);
  const updateItem = useShoppingStore((state) => state.updateItem);

  const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value.trim() && value !== item.name) {
      updateItem(item.$id, { name: value.trim() });
    } else {
      setValue(item.name);
    }
    setEdit(false);
  };

  const handleRemove = () => {
    toast.error(
      <>
        Item removed: <strong className="font-black">{item.name}</strong>
      </>
    );
    deleteItem(item.$id);
  };

  const handleMarked = () => {
    updateItem(item.$id, {
      marked: !item.marked,
      done: item.done ? false : item.done,
    });
  };

  const handleDone = () => {
    updateItem(item.$id, {
      done: !item.done,
      marked: item.marked ? false : item.marked,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      setValue(item.name);
      setEdit(false);
    }
  };

  const variant = useMemo(() => {
    if (item.done) return "done";
    if (item.marked) return "marked";

    return "default";
  }, [item.done, item.marked]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        edit &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        if (value.trim() && value !== item.name) {
          updateItem(item.$id, { name: value.trim() });
        } else {
          setValue(item.name);
        }
        setEdit(false);
      }
    };

    if (edit) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [edit, value, item.name, item.$id, updateItem]);

  return (
    <ShoppingCardWrapper
      variant={variant}
      className="flex flex-col justify-between"
    >
      <>
        {edit ? (
          <form onSubmit={handleUpdate} className="w-full gap-1 flex">
            <Input
              ref={inputRef}
              value={value}
              autoFocus
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
            <Button size="sm" variant="ghost">
              <Edit />
            </Button>
          </form>
        ) : (
          <ShoppingCardTitle variant={variant} className="flex gap-1 w-full">
            <div
              className={`${
                isDefault ? "cursor-pointer" : ""
              } w-full my-auto leading-5`}
              onClick={() => isDefault && setEdit(true)}
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
        <div className="space-x-0 space-y-1 xs:space-y-0 xs:space-x-1 flex flex-wrap w-full justify-end">
          <Button
            variant={item.marked ? "default" : item.done ? "ghost" : "outline"}
            size="sm"
            onClick={handleMarked}
          >
            <Bookmark />
          </Button>
          <Button
            variant={
              item.done ? "ghost" : item.marked ? "default" : "secondary"
            }
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
