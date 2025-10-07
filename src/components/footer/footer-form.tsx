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

  // check if any item.name from items contains the current name (case insensitive)
  const nameExists = items?.some(
    (item) => item.name.toLowerCase() === name.toLowerCase()
  );

  const totalCount = useShoppingStore((state) => state.totalCount);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (nameExists) {
      toast.warning(
        <>
          The item <strong className="font-black">{name}</strong> is already in
          your shopping list.
        </>
      );
      return;
    }

    try {
      await createItem({
        name: name.trim(),
        done: false,
        marked: false,
        creator: user!.name,
        creatorId: user!.$id,
        order: totalCount + 1,
      });
      setName("");
      toast.success(`Item created: ${name}`);
    } catch (error) {
      toast.error("Error creating item", {
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
