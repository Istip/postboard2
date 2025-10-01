import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PlusCircleIcon } from "lucide-react";
import { ID, tables } from "@/lib/appwrite";
import { useAuthStore } from "@/stores/auth.store";

interface Props {
  show: boolean;
}

const databaseId = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const tableId = import.meta.env.VITE_APP_APPWRITE_SHOPPING_LIST_TABLE_ID;

const FooterForm = ({ show }: Props) => {
  const [content, setContent] = useState("");

  const user = useAuthStore((state) => state.user);

  const data: Shopping = {
    $id: ID.unique(),
    $createdAt: new Date().toISOString(),
    $updatedAt: new Date().toISOString(),
    name: content,
    done: false,
    marked: false,
    creator: user!.name,
    creatorId: user!.$id,
    order: 1,
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    console.log("Submit:", content);

    if (content.trim() === "") return;

    tables
      .createRow({
        databaseId,
        tableId,
        rowId: ID.unique(),
        data,
      })
      .then((response) => {
        console.log("Row created:", response);
        setContent("");
      })
      .catch((err: unknown) => console.error("Error creating row:", err));
  };

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          key="footer-input"
          className="w-full"
          initial={{
            opacity: 0,
            height: 0,
            marginTop: 0,
            paddingTop: 0,
            paddingBottom: 0,
          }}
          animate={{
            opacity: 1,
            height: "auto",
            marginTop: 8,
            paddingTop: 0,
            paddingBottom: 0,
          }}
          exit={{
            opacity: 0,
            height: 0,
            marginTop: 0,
            paddingTop: 0,
            paddingBottom: 0,
          }}
          transition={{
            duration: 0.2,
          }}
        >
          <form onSubmit={handleSubmit} className="flex w-full gap-2">
            <Input
              type="text"
              placeholder="Enter your text here..."
              className="w-full"
              autoFocus
              required
              onChange={handleChange}
            />
            <Button type="submit">
              <PlusCircleIcon />
            </Button>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FooterForm;
