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

const Navigation = () => {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const routes = [
    { name: "Home", path: "/" },
    {
      name: "Tutorial",
      path: "/tutorial",
    },
  ];

  return (
    <nav className="fixed top-0 w-screen bg-secondary border-b border-foreground/20 p-4 flex items-center justify-between shadow-primary shadow-xs transition-all duration-200  hover:shadow-md">
      <Logo />
      {user && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer">
              <AvatarImage src="" alt={user.name} />
              <AvatarFallback>{initials(user.name)}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="p-2 mr-2 text-center">
            <h2 className="text-xl heading text-muted-foreground">
              Hello, <p className="heading text-primary">{user.name}</p>
            </h2>
            <Divider>PAGES</Divider>
            {routes.map((route) => (
              <DropdownMenuItem asChild key={route.name}>
                <Link to={route.path}>{route.name}</Link>
              </DropdownMenuItem>
            ))}
            <Divider>SETTINGS</Divider>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <ThemeToggle />
            <DropdownMenuItem variant="destructive" onClick={logout}>
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </nav>
  );
};

export default Navigation;
