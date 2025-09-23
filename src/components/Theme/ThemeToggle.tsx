import { Moon, Sun, SunMoon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/Theme/ThemeProvider";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Card } from "@/components/ui/card";
import ScreenReader from "@/components/Helpers/ScreenReader";

type Theme = {
  name: "light" | "dark" | "system";
  icon: "Sun" | "Moon" | "SunMoon";
};

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const iconMap = { Sun, Moon, SunMoon };

  const themes: Theme[] = [
    { name: "light", icon: "Sun" },
    { name: "dark", icon: "Moon" },
    { name: "system", icon: "SunMoon" },
  ];

  const TogglerIcon = ({ name }: { name: string }) => {
    const IconComponent = iconMap[name as keyof typeof iconMap];
    return (
      <div className="flex justify-center items-center text-center">
        <IconComponent className="h-4 w-4 " />
      </div>
    );
  };

  return (
    <Card className="my-2 bg-secondary p-2 border rounded-md">
      <div>
        <h2 className="text-center text-sm pb-2">Theme selector</h2>
        <div className="center gap-2">
          {themes.map(({ name, icon }) => (
            <Tooltip key={name}>
              <TooltipTrigger asChild>
                <Button
                  key={name}
                  onClick={() => setTheme(name)}
                  className="cursor-pointer capitalize"
                  size="icon"
                  variant={theme === name ? "default" : "secondary"}
                >
                  <TogglerIcon name={icon} />
                  <ScreenReader>{name}</ScreenReader>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                Set theme to <b>{name == "system" ? "system default" : name}</b>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </Card>
  );
}
