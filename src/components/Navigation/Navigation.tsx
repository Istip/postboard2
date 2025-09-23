import { useAuthStore } from "@/stores/auth.store";
import { ThemeToggle } from "@/components/Theme/ThemeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { initials } from "@/lib/initials";
import Divider from "@/components/Helpers/Divider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Logo from "@/components/Navigation/Logo";

const Navigation = () => {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  return (
    <nav className="bg-secondary border-b border-foreground/20 p-4 flex items-center justify-between shadow-primary shadow-xs transition-all duration-200  hover:shadow-md">
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
            <DropdownMenuItem>Home</DropdownMenuItem>
            <DropdownMenuItem>About</DropdownMenuItem>
            <DropdownMenuItem>Contact</DropdownMenuItem>
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
