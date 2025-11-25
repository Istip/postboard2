import BackgroundPage from "@/components/helpers/background-page";
import Title from "@/components/ui/title";
import { backgrounds } from "@/lib/backgrounds";

const Notes = () => {
  return (
    <BackgroundPage background={backgrounds.notes}>
      <Title>Notes</Title>
    </BackgroundPage>
  );
};

export default Notes;
