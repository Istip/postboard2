import BackgroundPage from "@/components/helpers/background-page";
import Title from "@/components/ui/title";
import { backgrounds } from "@/lib/backgrounds";
import { useState } from "react";
import { Reorder, useDragControls } from "motion/react";
import { GripVertical } from "lucide-react";

type Note = {
  id: string;
  content: string;
  category: string;
  order: number;
};

const NoteItem = ({ note }: { note: Note }) => {
  const controls = useDragControls();

  return (
    <Reorder.Item
      key={note.id}
      value={note}
      className="p-2 bg-background/20 backdrop-blur-md rounded-lg select-none touch-manipulation"
      dragListener={false}
      dragControls={controls}
      initial={{ rotate: 0 }}
      animate={{ rotate: 0 }}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.1}
    >
      <div className="flex items-center justify-between space-x-2">
        <div>
          <span className="flex-1">{note.content}</span>{" "}
          <span>{note.order}</span>
        </div>
        <div
          className="cursor-grab active:cursor-grabbing p-2 hover:bg-background/50 backdrop-blur-2xl rounded touch-manipulation"
          onPointerDown={(e) => {
            e.preventDefault();
            controls.start(e);
          }}
          style={{ touchAction: "none" }}
        >
          <GripVertical className="w-5 h-5 text-gray-400" />
        </div>
      </div>
    </Reorder.Item>
  );
};

const mockNotes = [
  { id: "work-1", content: "First Note", category: "Work", order: 1 },
  { id: "work-2", content: "Two Three", category: "Work", order: 2 },
  { id: "work-3", content: "Test stuff", category: "Work", order: 3 },
  {
    id: "personal-1",
    content: "Personal Jesus",
    category: "Personal",
    order: 1,
  },
  { id: "personal-2", content: "Yolo", category: "Personal", order: 2 },
  {
    id: "personal-3",
    content: "Dunno what to say",
    category: "Personal",
    order: 3,
  },
  { id: "ideas-1", content: "First Note", category: "Ideas", order: 1 },
  { id: "ideas-2", content: "Second Note", category: "Ideas", order: 2 },
  { id: "ideas-3", content: "Third Note", category: "Ideas", order: 3 },
  { id: "ideas-4", content: "Fourth Note", category: "Ideas", order: 4 },
  { id: "ideas-5", content: "Fifth Note", category: "Ideas", order: 5 },
];

const Notes = () => {
  // Create grouped notes state
  const [notes, setNotes] = useState(mockNotes);

  // Group notes by category
  const groupedNotes = notes.reduce((groups, note) => {
    const category = note.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(note);
    return groups;
  }, {} as Record<string, typeof notes>);

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
        (note) => note.category === category
      );

      // Remove all items from this category
      const withoutCategory = prevNotes.filter(
        (note) => note.category !== category
      );

      // Insert the reordered items back at the original category position
      withoutCategory.splice(firstCategoryIndex, 0, ...reorderedWithOrder);

      return withoutCategory;
    });
  };

  return (
    <BackgroundPage background={backgrounds.notes}>
      <Title>Notes</Title>
      <div className="space-y-6">
        {noteGroups.map(({ category, items }) => (
          <div key={category} className="space-y-2 mx-2">
            <h3 className="text-lg font-semibold">{category}</h3>
            <Reorder.Group
              axis="y"
              values={items}
              onReorder={(newOrder) => handleReorder(category, newOrder)}
              className="space-y-2"
              layoutScroll={false}
            >
              {items.map((note) => (
                <NoteItem key={note.id} note={note} />
              ))}
            </Reorder.Group>
          </div>
        ))}
      </div>
    </BackgroundPage>
  );
};

export default Notes;
