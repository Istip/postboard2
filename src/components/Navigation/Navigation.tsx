import { useAuthStore } from "@/stores/auth.store";
import { ThemeToggle } from "@/components/Theme/ThemeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { initials } from "@/lib/initials";
import Divider from "@/components/Helpers/Divider";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
    <nav className="border-b border-secondary p-4 flex items-center justify-between shadow-primary shadow-xs transition-all duration-200 lg:hover:shadow-md">
      <Logo />
      {user && (
        <DropdownMenu>
          <Tooltip>
            <TooltipTrigger>
              <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src="" alt="User Avatar" />
                  <AvatarFallback>{initials(user!.name)}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
            </TooltipTrigger>
            <TooltipContent>Open the Profile Menu</TooltipContent>
          </Tooltip>

          <DropdownMenuContent className="p-2 mr-2 text-center">
            <h2 className="text-xl">Hello,</h2>
            <p className="font-black">{user?.name}</p>
            <Divider />
            <DropdownMenuItem>Home</DropdownMenuItem>
            <Divider>SETTINGS</Divider>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <Divider />
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
