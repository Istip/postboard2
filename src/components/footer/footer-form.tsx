import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PlusCircleIcon } from "lucide-react";
import { useShoppingStore } from "@/stores/shopping.store";
import { useAuthStore } from "@/stores/auth.store";
import { toast } from "sonner";

interface Props {
  show: boolean;
}

const FooterForm = ({ show }: Props) => {
  const [name, setName] = useState("");

  const user = useAuthStore((state) => state.user);
  const createItem = useShoppingStore((state) => state.createItem);

  const items = useShoppingStore((state) => state.items);
  const totalCount = useShoppingStore((state) => state.totalCount);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
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

    // Check for existing items
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
      // Create each item individually
      const promises = itemNames.map((itemName, index) =>
        createItem({
          name: itemName,
          done: false,
          marked: false,
          creator: user!.name,
          creatorId: user!.$id,
          order: totalCount + index + 1,
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
          <form onSubmit={handleSubmit} className="flex w-full gap-2">
            <Input
              type="text"
              value={name}
              placeholder="Enter your text here..."
              className="w-full"
              autoFocus
              required
              onChange={handleChange}
            />
            <Button type="submit" disabled={name.trim() === ""}>
              <PlusCircleIcon />
            </Button>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FooterForm;
