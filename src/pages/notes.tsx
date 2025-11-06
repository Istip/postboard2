import BackgroundPage from "@/components/helpers/background-page";
import SortableNested from "@/components/notes/nested/nested";
import Title from "@/components/ui/title";
import { backgrounds } from "@/lib/backgrounds";

const Notes = () => {
  return (
    <BackgroundPage background={backgrounds.notes}>
      <Title>Notes</Title>
      <SortableNested />
    </BackgroundPage>
  );
};

export default Notes;
