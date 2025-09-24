import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookLock, ShoppingBasket, StickyNote } from "lucide-react";
import ScreenReader from "@/components/helpers/screen-reader";

const FooterIcons = () => {
  return (
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
  );
};

export default FooterIcons;
