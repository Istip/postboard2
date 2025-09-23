import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BookLock,
  CirclePlus,
  CircleX,
  Menu,
  ShoppingBasket,
  StickyNote,
} from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import ScreenReader from "@/components/Helpers/ScreenReader";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 center w-full p-4 bg-secondary flex justify-between border-t border-foreground/20">
      <div className="flex items-center w-full">
        <Button variant="ghost" size="sm" className="mr-2">
          <ShoppingBasket /> <Badge variant="secondary">3</Badge>
          <ScreenReader>Shopping list</ScreenReader>
        </Button>
        <Button variant="ghost" size="sm" className="mr-2">
          <StickyNote /> <Badge variant="secondary">5</Badge>
          <ScreenReader>Notes</ScreenReader>
        </Button>
        <Button variant="ghost" size="sm" className="mr-2">
          <BookLock />
          <ScreenReader>Private notes</ScreenReader>
        </Button>
      </div>

      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="secondary" size="sm">
            <Menu />
            <ScreenReader>Open drawer</ScreenReader>
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <div className="center gap-2">
              <Input />
              <DrawerClose>
                <CircleX />
              </DrawerClose>
              <Button>
                <CirclePlus />
              </Button>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </footer>
  );
};

export default Footer;
