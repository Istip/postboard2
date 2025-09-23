import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CirclePlus, Menu } from "lucide-react";
import ScreenReader from "@/components/Helpers/ScreenReader";

const FooterDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="secondary" size="sm">
              <Menu />
              <ScreenReader>Open drawer</ScreenReader>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Open quick add drawer</TooltipContent>
        </Tooltip>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <div className="center gap-2">
            <Input />
            <Button>
              <CirclePlus />
            </Button>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default FooterDrawer;
