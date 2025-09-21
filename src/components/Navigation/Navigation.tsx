import { useAuthStore } from "@/stores/auth.store";
import { ThemeToggle } from "@/components/Theme/ThemeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { initials } from "@/lib/initials";

const Navigation = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <nav className="border-b p-4 flex items-center justify-between">
      <div className="h-4 w-4 rounded-full bg-neon" />
      <div className="center">
        {user && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage src="" alt="User Avatar" />
                <AvatarFallback>{initials(user!.name)}</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <ThemeToggle />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
