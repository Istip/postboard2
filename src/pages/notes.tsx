import BackgroundPage from "@/components/helpers/background-page";
import Title from "@/components/ui/title";
import { backgrounds } from "@/lib/backgrounds";

const Notes = () => {
  return (
    <BackgroundPage background={backgrounds.notes}>
      <Title>Notes</Title>
      <div className="text-4xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
        vitae deleniti reprehenderit sint eligendi, tempora ad eaque error
        expedita quisquam illo beatae unde asperiores nihil eos at officiis quos
        sed.
      </div>
      <div className="text-4xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
        vitae deleniti reprehenderit sint eligendi, tempora ad eaque error
        expedita quisquam illo beatae unde asperiores nihil eos at officiis quos
        sed.
      </div>
      <div className="text-4xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
        vitae deleniti reprehenderit sint eligendi, tempora ad eaque error
        expedita quisquam illo beatae unde asperiores nihil eos at officiis quos
        sed.
      </div>
    </BackgroundPage>
  );
};

export default Notes;
