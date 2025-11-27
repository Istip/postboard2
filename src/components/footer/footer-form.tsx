import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PlusCircleIcon, StarIcon } from "lucide-react";
import { useShoppingStore } from "@/stores/shopping.store";
import { useAuthStore } from "@/stores/auth.store";
import { toast } from "sonner";
import { Toggle } from "@/components/ui/toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Props {
  show: boolean;
}

const FooterForm = ({ show }: Props) => {
  const [name, setName] = useState("");
  const [marked, setMarked] = useState(false);

  const user = useAuthStore((state) => state.user);
  const createItem = useShoppingStore((state) => state.createItem);

  const items = useShoppingStore((state) => state.items);
  const totalCount = useShoppingStore((state) => state.totalCount);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleMarkedToggle = () => {
    setMarked((prev) => !prev);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const itemNames = name
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item.length > 0);

    const tooLongItems = itemNames.filter((item) => item.length > 24);
    if (tooLongItems.length > 0) {
      toast.warning(`Item name is too long: ${tooLongItems[0]}`);
      return;
    }

    const existingItems = itemNames.filter((itemName) =>
      items?.some((item) => item.name.toLowerCase() === itemName.toLowerCase())
    );

    if (existingItems.length > 0) {
      toast.warning(
        <>
          {existingItems.length === 1 ? "Item" : "Items"} already exist:{" "}
          <strong className="font-black">{existingItems.join(", ")}</strong>
        </>
      );
      return;
    }

    try {
      const promises = itemNames.map((itemName, index) =>
        createItem({
          name: itemName,
          done: false,
          marked,
          creator: user!.name,
          creatorId: user!.$id,
          order: totalCount + index + 1,
          description: "",
        })
      );

      await Promise.all(promises);
      setName("");

      if (itemNames.length === 1) {
        toast.success(`Item created: ${itemNames[0]}`);
      } else {
        toast.success(
          `${itemNames.length} items created: ${itemNames.join(", ")}`
        );
      }
    } catch (error) {
      toast.error("Error creating items", {
        description: error instanceof Error ? error.message : String(error),
      });
    }
  };

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          key="footer-input"
          className="w-full"
          initial={{ opacity: 0, height: 0, marginTop: 0 }}
          animate={{ opacity: 1, height: "auto", marginTop: 16 }}
          exit={{ opacity: 0, height: 0, marginTop: 0 }}
          transition={{ duration: 0.2 }}
        >
          <form
            onSubmit={handleSubmit}
            className="flex max-w-7xl mx-auto gap-2"
          >
            <Input
              name="shopping-item"
              type="text"
              value={name}
              placeholder="Add items to your shopping list"
              className="w-full"
              autoFocus
              required
              onChange={handleChange}
            />
            <Tooltip>
              <TooltipTrigger asChild>
                <Toggle
                  onClick={handleMarkedToggle}
                  pressed={marked}
                  variant={marked ? "outline" : "default"}
                  type="button"
                  aria-label="Check for create marked items"
                >
                  <StarIcon />
                </Toggle>
              </TooltipTrigger>
              <TooltipContent>Check for create marked items</TooltipContent>
            </Tooltip>
            <Button
              type="submit"
              disabled={name.trim() === ""}
              aria-label="Add new item to the shopping list"
            >
              <PlusCircleIcon />
            </Button>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FooterForm;
