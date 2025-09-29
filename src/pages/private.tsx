import BackgroundPage from "@/components/helpers/background-page";
import Title from "@/components/ui/title";
import { backgrounds } from "@/lib/image-urls";

const Private = () => {
  return (
    <BackgroundPage background={backgrounds.private}>
      <Title>Private</Title>
    </BackgroundPage>
  );
};

export default Private;
