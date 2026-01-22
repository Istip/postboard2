import { useAuthStore } from "@/stores/auth.store";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { initials } from "@/lib/initials";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Logo from "@/components/navigation/logo";
import Divider from "@/components/helpers/divider";
import { Link } from "react-router";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Settings } from "lucide-react";

interface Props {
  showBackButton?: boolean;
}

const Navigation = ({ showBackButton = false }: Props) => {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const routes = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Tutorial",
      path: "/tutorial",
    },
  ];

  return (
    <nav className="fixed top-0 w-screen bg-secondary border-b border-foreground/20 px-2 py-4 xl:px-0">
      <div className="max-w-7xl flex items-center justify-between mx-auto">
        <Logo showBackButton={showBackButton} />
        {user && (
          <div className="center">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link to="/settings" className="mr-4 py-1">
                  <Settings className="text-muted-foreground" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>Go to Settings page</TooltipContent>
            </Tooltip>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Avatar className="cursor-pointer">
                      <AvatarImage src="" alt={user.name} />
                      <AvatarFallback>{initials(user.name)}</AvatarFallback>
                    </Avatar>
                  </TooltipTrigger>
                  <TooltipContent>Open the Menu</TooltipContent>
                </Tooltip>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="p-2 mr-2 text-center">
                <h2 className="text-xl heading text-muted-foreground">
                  Hello, <p className="heading text-primary">{user.name}</p>
                </h2>
                <Divider>NAVIGATION</Divider>
                {routes.map((route) => (
                  <DropdownMenuItem asChild key={route.name}>
                    <Link to={route.path}>{route.name}</Link>
                  </DropdownMenuItem>
                ))}
                <Divider>ADMINISTRATION</Divider>
                <ThemeToggle />
                <DropdownMenuItem variant="destructive" onClick={logout}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
