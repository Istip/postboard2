import { useState, useEffect } from "react";
import { Calendar, CircleUser, Save, SquarePen, X } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useShoppingStore } from "@/stores/shopping.store";
import { toast } from "sonner";
import Divider from "@/components/helpers/divider";

interface Props {
  item: Shopping;
}

const ShoppingCardDialog = ({ item }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(item.description || "");
  const [isLoading, setIsLoading] = useState(false);

  const updateItem = useShoppingStore((state) => state.updateItem);

  const list = [
    { label: item.creator, value: "Created by", icon: <CircleUser /> },
    {
      label: new Date(item.$createdAt).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
      }),
      value: "Date",
      icon: <Calendar />,
    },
  ];

  const handleSave = async () => {
    const trimmedDescription = description.trim();

    // Use the same logic as isDescriptionModified
    if (!isDescriptionModified()) {
      setIsEditing(false);
      return;
    }

    setIsLoading(true);
    try {
      await updateItem(item.$id, { description: trimmedDescription });
      setIsEditing(false);
      toast.success("Description updated successfully");
    } catch {
      toast.error("Failed to update description");
      setDescription(item.description || "");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
  };

  const handleCancel = () => {
    setDescription(item.description || "");
    setIsEditing(false);
  };

  const isDescriptionModified = () => {
    const trimmedDescription = description.trim();
    const originalDescription = item.description; // Don't fallback to empty string

    // If original was null/undefined and new is empty, no change
    if (!originalDescription && !trimmedDescription) {
      return false;
    }

    // If original exists and new is different (including empty), it's a change
    // If original doesn't exist and new has content, it's a change
    return trimmedDescription !== (originalDescription || "");
  };

  useEffect(() => {
    setDescription(item.description || "");
  }, [item.description]);

  return (
    <>
      <h3 className="text-2xl pb-4 text-center">{item.name}</h3>
      {list.map((data) => (
        <div
          key={data.value}
          className="flex items-center justify-between gap-2 space-y-1"
        >
          <div className="center text-left gap-2 text-sm">
            {data.icon}
            <span>{data.value}</span>
          </div>
          <span className="text-right font-semibold text-sm">{data.label}</span>
        </div>
      ))}
      <Divider>MORE</Divider>
      <>
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-sm font-medium">Description:</h4>
          {!isEditing ? (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsEditing(true)}
              className="h-6 px-2"
            >
              <SquarePen className="h-3 w-3" />
            </Button>
          ) : (
            <div className="flex gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleSave}
                disabled={isLoading || !isDescriptionModified()}
                className="h-6 px-2"
              >
                <Save className="h-3 w-3" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCancel}
                disabled={isLoading}
                className="h-6 px-2"
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          )}
        </div>
        {isEditing ? (
          <Textarea
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Add a description..."
            className="min-h-20 resize-none"
            disabled={isLoading}
            autoFocus
          />
        ) : (
          <p
            className={`text-sm ${
              item.marked ? "text-background" : "text-muted-foreground"
            }`}
          >
            {description || "No description added."}
          </p>
        )}
      </>
    </>
  );
};

export default ShoppingCardDialog;
