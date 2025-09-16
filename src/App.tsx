import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/Theme/ThemeProvider";
import { ThemeToggle } from "@/components/Theme/ThemeToggle";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ThemeToggle />
      <div className="center">
        <div className="container p-4">
          <h1 className="heading text-4xl text-center">Postboard</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
            repellat, distinctio earum quaerat eius qui sit iste consequatur
            ullam adipisci aspernatur ab explicabo labore facilis enim
            praesentium expedita quia atque.
          </p>
          <Button>Apply For Free</Button>
        </div>
      </div>
    </ThemeProvider>
  );
}
