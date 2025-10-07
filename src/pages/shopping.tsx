import BackgroundPage from "@/components/helpers/background-page";
import Title from "@/components/ui/title";
import { backgrounds } from "@/lib/backgrounds";

const ShoppingList = () => {
  return (
    <BackgroundPage background={backgrounds.shopping}>
      <Title>Shopping list</Title>
    </BackgroundPage>
  );
};

export default ShoppingList;
