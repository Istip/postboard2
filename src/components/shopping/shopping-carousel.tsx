import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useShoppingStore } from "@/stores/shopping.store";
import { CircleCheck, StarIcon, Trash2Icon } from "lucide-react";
import { toast } from "sonner";

interface Props {
  items?: Shopping[];
}

const ShoppingCarousel = ({ items }: Props) => {
  const deleteItem = useShoppingStore((state) => state.deleteItem);
  const updateItem = useShoppingStore((state) => state.updateItem);

  const handleRemove = ({ item }: { item: Shopping }) => {
    toast.error(
      <>
        Item removed: <strong className="font-black">{item.name}</strong>
      </>
    );
    deleteItem(item.$id);
  };

  const handleUnmark = ({ item }: { item: Shopping }) => {
    updateItem(item.$id, {
      marked: !item.marked,
      done: item.done ? false : item.done,
    });
  };

  const handleDone = ({ item }: { item: Shopping }) => {
    updateItem(item.$id, {
      done: !item.done,
      marked: item.marked ? false : item.marked,
    });
  };

  return (
    <Carousel opts={{ align: "start", loop: true }} className="w-full">
      <CarouselContent className="-ml-2 mx-0">
        {items?.map((item) => (
          <CarouselItem
            key={item.$id}
            className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 text-center flex w-full text-background pl-2"
          >
            <div className="border border-primary rounded-xl p-2 w-full flex flex-col items-center bg-primary/60 font-medium backdrop-blur-sm text-base justify-between gap-2">
              <p>{item.name}</p>
              <div className="flex gap-2 w-full">
                <Button
                  variant="destructive"
                  size="sm"
                  className="flex flex-1"
                  onClick={() => handleRemove({ item })}
                >
                  <Trash2Icon />
                </Button>
                <Button
                  size="sm"
                  className="flex flex-1"
                  onClick={() => handleUnmark({ item })}
                >
                  <StarIcon />
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  className="flex flex-1"
                  onClick={() => handleDone({ item })}
                >
                  <CircleCheck />
                </Button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ShoppingCarousel;
