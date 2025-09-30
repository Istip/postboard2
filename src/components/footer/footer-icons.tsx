import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LockIcon, ShoppingBasket, StickyNote } from "lucide-react";
import { Link, useLocation } from "react-router";

const FooterIcons = () => {
  const { pathname } = useLocation();

  const icons = [
    { icon: <ShoppingBasket />, label: "Shopping", route: "/", badge: 3 },
    { icon: <StickyNote />, label: "Notes", route: "/notes" },
    { icon: <LockIcon />, label: "Private", route: "/private" },
  ];

  return (
    <div className="flex items-center w-full space-x-1">
      {icons.map((item, index) => (
        <Button
          key={index}
          variant={pathname === item.route ? "default" : "ghost"}
          size="sm"
          asChild
        >
          <Link to={item.route}>
            {item.icon}
            <span className="text-[10px] ml-1 hidden xs:block">
              {item.label}
            </span>
            {item.badge && <Badge variant="secondary">{item.badge}</Badge>}
          </Link>
        </Button>
      ))}
    </div>
  );
};

export default FooterIcons;
