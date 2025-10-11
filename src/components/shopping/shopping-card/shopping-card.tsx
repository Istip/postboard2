import { useState, useMemo, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, Edit, InfoIcon, StarIcon, Trash } from "lucide-react";
import {
  ShoppingCardWrapper,
  ShoppingCardTitle,
} from "@/components/shopping/shopping-card/shopping-card-components";
import { useShoppingStore } from "@/stores/shopping.store";
import { toast } from "sonner";
import { ButtonGroup } from "@/components/ui/button-group";
import { useAnimatedDialog } from "@/components/ui/animated-dialog";
import { motion } from "motion/react";
import ShoppingCardDialog from "@/components/shopping/shopping-card-dialog";

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
  const { openDialog } = useAnimatedDialog();

  const handleInfoClick = () => {
    const style = () => {
      if (item.done)
        return "bg-secondary/70 border border-foreground/50 border-dashed border-text";
      if (item.marked) return "bg-primary text-background";
      return "bg-background text-foreground";
    };

    openDialog(
      `shopping-card-${item.$id}`,
      <ShoppingCardDialog item={item} />,
      style()
    );
  };

  const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value.trim() && value !== item.name) {
      if (value.length > 24) {
        toast.warning("Item name is too long.");
        return;
      }

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

  const handleToggleEdit = () => {
    if (isDefault) {
      setEdit(true);
    }
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
    <motion.div
      layoutId={`shopping-card-${item.$id}`}
      className="h-full w-full"
    >
      <ShoppingCardWrapper
        variant={variant}
        className="flex flex-col justify-between h-full w-full"
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
              <Button size="sm" variant="ghost" type="submit">
                <Edit />
              </Button>
            </form>
          ) : (
            <ShoppingCardTitle variant={variant} className="flex gap-1 w-full">
              <div
                className={`${
                  isDefault ? "cursor-pointer" : ""
                } w-full my-auto leading-5`}
                onClick={handleToggleEdit}
              >
                {item.name}
              </div>
              <Button
                className={`${item.marked ? "text-background" : ""}`}
                variant={
                  item.marked ? "outline" : item.done ? "ghost" : "outline"
                }
                size="sm"
                onClick={handleMarked}
              >
                <StarIcon />
              </Button>
            </ShoppingCardTitle>
          )}
        </>
        <div className="flex gap-2 w-full justify-between">
          <Button size="sm" variant="destructive" onClick={handleRemove}>
            <Trash />
          </Button>
          <ButtonGroup>
            <Button size="sm" variant="ghost" onClick={handleInfoClick}>
              <InfoIcon />
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
          </ButtonGroup>
        </div>
      </ShoppingCardWrapper>
    </motion.div>
  );
};

export default ShoppingCard;
