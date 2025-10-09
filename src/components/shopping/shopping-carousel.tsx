import ShoppingCard from "@/components/shopping/shopping-card/shopping-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Props {
  items?: Shopping[];
}

const ShoppingCarousel = ({ items }: Props) => {
  return (
    <Carousel opts={{ align: "start", loop: true }} className="w-full">
      <CarouselContent className="mx-0">
        {items?.map((item) => (
          <CarouselItem
            key={item.$id}
            className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 flex w-full text-background pl-2"
          >
            <div className="w-full h-full flex">
              <ShoppingCard item={item} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ShoppingCarousel;
