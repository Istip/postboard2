import { Moon, Sun, SunMoon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/Theme/ThemeProvider";
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
    <div className="border p-2 rounded-sm mb-2 bg-secondary">
      <h2 className="text-center pb-2">Theme selector</h2>
      <div className="center gap-2">
        {themes.map(({ name, icon }) => (
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
        ))}
      </div>
    </div>
  );
}
