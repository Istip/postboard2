import { Moon, Sun, Computer } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/Theme/ThemeProvider";
import ScreenReader from "@/components/helpers/ScreenReader";

type Theme = {
  name: "light" | "dark" | "system";
  icon: "Sun" | "Moon" | "Computer";
};

export function ThemeToggle() {
  const { setTheme } = useTheme();

  const iconMap = { Sun, Moon, Computer };

  const themes: Theme[] = [
    { name: "light", icon: "Sun" },
    { name: "dark", icon: "Moon" },
    { name: "system", icon: "Computer" },
  ];

  const TogglerIcon = ({ name }: { name: string }) => {
    const IconComponent = iconMap[name as keyof typeof iconMap];
    return <IconComponent className="mr-2 h-4 w-4" />;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <ScreenReader>Toggle theme</ScreenReader>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map(({ name, icon }) => (
          <DropdownMenuItem
            key={name}
            onClick={() => setTheme(name)}
            className="cursor-pointer capitalize"
          >
            <TogglerIcon name={icon} />
            <span>{name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
