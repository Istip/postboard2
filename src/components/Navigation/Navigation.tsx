import { useAuthStore } from "@/stores/auth.store";
import { useNavigate } from "react-router";
import { ThemeToggle } from "@/components/Theme/ThemeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { initials } from "@/lib/initials";
import { Button } from "@/components/ui/button";
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

const Navigation = () => {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const navigate = useNavigate();

  const handleNavigateHome = () => navigate("/");

  return (
    <nav className="border-b border-secondary p-4 flex items-center justify-between shadow-primary shadow-xs transition-all delay-200 hover:shadow-md">
      <div className="h-4 w-4 rounded-full bg-primary">
        <Button
          variant="ghost"
          size="icon"
          className="h-4 w-4 p-0"
          onClick={handleNavigateHome}
        />
      </div>
      <div className="center">
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
            <DropdownMenuContent className="p-2 mr-2">
              <div className="center flex-col">
                <h2 className="text-xl">Hello,</h2>
                <p className="font-black">{user?.name}</p>
              </div>
              <Divider />
              <DropdownMenuItem>Home</DropdownMenuItem>
              <Divider>SETTINGS</Divider>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <Divider />
              <ThemeToggle />
              <Divider />
              <Tooltip>
                <TooltipTrigger asChild>
                  <DropdownMenuItem
                    variant="destructive"
                    onClick={logout}
                    className="text-center center"
                  >
                    Logout
                  </DropdownMenuItem>
                </TooltipTrigger>
                <TooltipContent>
                  Logging out? Why would you do that?
                </TooltipContent>
              </Tooltip>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
