import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useShoppingStore } from "@/stores/shopping.store";
import { Trash2Icon } from "lucide-react";
import { toast } from "sonner";

interface Props {
  items?: Shopping[];
}

const ShoppingCarousel = ({ items }: Props) => {
  const deleteItem = useShoppingStore((state) => state.deleteItem);

  const handleRemove = ({ item }: { item: Shopping }) => {
    toast.error(
      <>
        Item removed: <strong className="font-black">{item.name}</strong>
      </>
    );
    deleteItem(item.$id);
  };

  return (
    <Carousel opts={{ align: "start", loop: true }} className="w-full">
      <CarouselContent className="">
        {items?.map((item) => (
          <CarouselItem
            key={item.$id}
            className="basis-1/3 md:basis-1/4 lg:basis-1/5 text-center flex w-full text-background"
          >
            <div className="border border-primary rounded-xl p-2 w-full flex flex-col items-center bg-primary/70 text-sm justify-between gap-2 mx-0.5">
              <p>{item.name}</p>
              <Button
                size="sm"
                className="w-full"
                onClick={() => handleRemove({ item })}
              >
                <Trash2Icon />
              </Button>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ShoppingCarousel;
