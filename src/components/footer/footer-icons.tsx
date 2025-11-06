import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LockIcon, ShoppingBasket, StickyNote } from "lucide-react";
import { Link, useLocation } from "react-router";
import { useShoppingStore } from "@/stores/shopping.store";
import { useEffect } from "react";

const FooterIcons = () => {
  const totalCount = useShoppingStore((state) => state.totalCount);
  const fetchCount = useShoppingStore((state) => state.fetchCount);

  const { pathname } = useLocation();

  useEffect(() => {
    fetchCount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const icons = [
    {
      icon: <ShoppingBasket />,
      label: "Shopping",
      route: "/",
      badge: totalCount > 0 ? totalCount : undefined,
    },
    { icon: <StickyNote />, label: "Notes", route: "/notes" },
    { icon: <LockIcon />, label: "Private", route: "/private" },
  ];

  return (
    <div className="flex items-center w-full space-x-1 max-w-lg">
      {icons.map((item, index) => (
        <Button
          key={index}
          variant={pathname === item.route ? "outline" : "ghost"}
          asChild
          className="flex-1 xs:w-full flex mr-2"
        >
          <Link to={item.route}>
            {item.icon}
            <span className="text-xs hidden xs:block">{item.label}</span>
            {item.badge && <Badge variant="secondary">{item.badge}</Badge>}
          </Link>
        </Button>
      ))}
    </div>
  );
};

export default FooterIcons;
