import BackgroundPage from "@/components/helpers/background-page";
import Title from "@/components/ui/title";
import { backgrounds } from "@/lib/backgrounds";
import { useState } from "react";
import { Reorder, useDragControls } from "motion/react";
import {
  Clock,
  Eye,
  GripVertical,
  SendHorizonal,
  Star,
  Trash,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { mockNotes } from "@/lib/mock";
import { ButtonGroup } from "@/components/ui/button-group";

type Note = {
  id: string;
  content: string;
  category: string;
  order: number;
  marked: boolean;
};

const NoteItem = ({
  note,
  isFirst,
  isLast,
  isSingle,
  onDragStart,
  onDragEnd,
}: {
  note: Note;
  isFirst?: boolean;
  isLast?: boolean;
  isSingle?: boolean;
  onDragStart?: (noteId: string) => void;
  onDragEnd?: () => void;
}) => {
  const controls = useDragControls();

  const getBorderRadius = () => {
    if (isSingle) return "rounded-lg";
    if (isFirst) return "rounded-t-lg";
    if (isLast) return "rounded-b-lg";
    return "";
  };

  return (
    <Reorder.Item
      key={note.id}
      value={note}
      className={`relative pr-2 py-2 ${getBorderRadius()} select-none touch-manipulation ${
        note.marked ? "bg-primary" : "bg-background"
      }`}
      dragListener={false}
      dragControls={controls}
      initial={{ rotate: 0 }}
      animate={{ rotate: 0 }}
      onDragStart={() => onDragStart?.(note.id)}
      onDragEnd={() => onDragEnd?.()}
      whileDrag={{
        scale: 1.01,
        zIndex: 30,
        boxShadow: "0 10px 24px rgba(15, 23, 42, 0.18)",
        opacity: 1,
      }}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.1}
      style={{ zIndex: 1 }}
    >
      <div className="flex items-center justify-between space-x-2">
        <div className="center gap-0">
          <div
            className="cursor-grab active:cursor-grabbing p-2 touch-manipulation"
            onPointerDown={(e) => {
              e.preventDefault();
              controls.start(e);
            }}
            style={{ touchAction: "none" }}
          >
            <GripVertical
              className={`w-4 h-4 ${
                note.marked ? "text-muted/50" : "text-muted-foreground/50"
              }`}
            />
          </div>
          <div className="space-y-1">
            <div
              className={`flex-1 text-sm ${
                note.marked ? "text-muted" : "text-foreground"
              }`}
            >
              {note.content}
            </div>
            <div
              className={`flex items-center gap-1 ${
                note.marked ? "text-muted/50" : "text-muted-foreground/50"
              }`}
            >
              <Clock className="h-4 w-4" />
              <div className="text-xs">2025.01.15</div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2">
          <ButtonGroup>
            <Button size="sm" variant="destructive">
              <Trash />
            </Button>
            <Button size="sm" variant="secondary">
              <Star />
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </Reorder.Item>
  );
};

const Notes = () => {
  // Create grouped notes state
  const [notes, setNotes] = useState(mockNotes);
  const [draggingNoteId, setDraggingNoteId] = useState<string | null>(null);
  const [draggingCategory, setDraggingCategory] = useState<string | null>(null);

  // Group notes by category
  const groupedNotes = notes.reduce(
    (groups, note) => {
      const category = note.category;
      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push(note);
      return groups;
    },
    {} as Record<string, typeof notes>,
  );

  // Convert object to array for mapping
  const noteGroups = Object.entries(groupedNotes).map(([category, items]) => ({
    category,
    items,
  }));

  // Handle reorder for a specific category
  const handleReorder = (category: string, newOrder: typeof notes) => {
    setNotes((prevNotes) => {
      // Update the order property for the reordered items
      const reorderedWithOrder = newOrder.map((note, index) => ({
        ...note,
        order: index + 1,
      }));

      // Find the original position of the first item in this category
      const firstCategoryIndex = prevNotes.findIndex(
        (note) => note.category === category,
      );

      // Remove all items from this category
      const withoutCategory = prevNotes.filter(
        (note) => note.category !== category,
      );

      // Insert the reordered items back at the original category position
      withoutCategory.splice(firstCategoryIndex, 0, ...reorderedWithOrder);

      return withoutCategory;
    });
  };

  return (
    <BackgroundPage background={backgrounds.notes}>
      <Title>Notes</Title>
      <div className="space-y-4">
        {noteGroups.map(({ category, items }) => {
          const isCurrentGroup = draggingCategory === category;

          return (
            <div
              key={category}
              className={`space-y-2 bg-background/20 backdrop-blur-sm p-2 rounded-lg border transition-colors duration-200 ${
                isCurrentGroup
                  ? "border-primary shadow-[0_0_0_1px_rgba(var(--primary),0.45)]"
                  : "border-background"
              }`}
            >
              <div className="flex items-center justify-between relative">
                <h3 className="text-center font-semibold text-lg flex-1 ml-[38.86px]">
                  {category}
                </h3>
                <Button variant="link" size="sm">
                  <Eye />
                </Button>
              </div>
              <Reorder.Group
                axis="y"
                values={items}
                onReorder={(newOrder) => handleReorder(category, newOrder)}
                className="space-y-0"
                layoutScroll={false}
              >
                {items.map((note, index) => {
                  const isDraggingTile =
                    draggingNoteId === note.id && draggingCategory === category;
                  const isSameGroupTile = draggingCategory === category;

                  return (
                    <div
                      key={note.id}
                      className="transition-opacity duration-200"
                      style={{
                        opacity:
                          draggingNoteId === null
                            ? 1
                            : isDraggingTile
                              ? 1
                              : isSameGroupTile
                                ? 0.4
                                : 0,
                      }}
                    >
                      <NoteItem
                        note={note}
                        isFirst={index === 0}
                        isLast={index === items.length - 1}
                        isSingle={items.length === 1}
                        onDragStart={(noteId) => {
                          setDraggingNoteId(noteId);
                          setDraggingCategory(category);
                        }}
                        onDragEnd={() => {
                          setDraggingNoteId(null);
                          setDraggingCategory(null);
                        }}
                      />
                    </div>
                  );
                })}
                <div className="flex gap-2 w-full mt-2">
                  <Input placeholder={`Add a new note to ${category}`} />
                  <Button type="submit">
                    <SendHorizonal />
                  </Button>
                </div>
              </Reorder.Group>
            </div>
          );
        })}
      </div>
    </BackgroundPage>
  );
};

export default Notes;
