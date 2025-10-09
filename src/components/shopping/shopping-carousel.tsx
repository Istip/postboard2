import ShoppingCard from "@/components/shopping/shopping-card/shopping-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { motion } from "motion/react";

interface Props {
  items?: Shopping[];
}

const ShoppingCarousel = ({ items }: Props) => {
  return (
    <Carousel opts={{ align: "start", loop: true }} className="w-full">
      <CarouselContent className="mx-0 py-4">
        {items?.map((item) => (
          <CarouselItem
            key={item.$id}
            className="hover:cursor-grab basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 flex w-full text-background pl-2"
          >
            <motion.div
              className="w-full h-full flex"
              whileTap={{ cursor: "grabbing", scale: 0.9 }}
            >
              <ShoppingCard item={item} />
            </motion.div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ShoppingCarousel;
