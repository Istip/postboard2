import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import ScreenReader from "@/components/helpers/screen-reader";
import DrawerFooterTitle from "@/components/footer/footer-drawer/footer-drawer-title";

const FooterDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="secondary" size="sm">
          <CirclePlus />
          <ScreenReader>Open drawer</ScreenReader>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerFooterTitle />
        <DrawerFooter>
          <Input autoFocus />
          <Button>
            <CirclePlus />
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default FooterDrawer;
