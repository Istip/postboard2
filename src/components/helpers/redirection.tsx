import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/stores/auth.store";
import { Home, MessageCircleWarning } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

const Redirection = () => {
  const time = 5;
  const [counter, setCounter] = useState(time);
  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();

  // Start countdown when user is present
  useEffect(() => {
    if (!user) return;
    setCounter(time);
    const interval = setInterval(() => {
      setCounter((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [user]);

  // Navigate to the home page when counter reaches 0
  useEffect(() => {
    if (user && counter <= 0) {
      navigate("/");
    }
  }, [user, counter, navigate]);

  return (
    <div className="flex flex-col justify-center items-center gap-4 w-screen h-[100dvh] text-center bg-background">
      <div className="text-foreground">
        <MessageCircleWarning
          className="mx-auto mb-4 p-4 rounded-xl bg-primary text-muted animate-pulse"
          size={64}
        />
        <p>
          You are already logged in as{" "}
          <b className="text-primary">{user!.name}</b>
        </p>
        <p>
          Redirecting to the Dashboard in{" "}
          <b className="text-primary">{counter}</b> seconds...
        </p>
      </div>

      <Button asChild variant="default">
        <Link to="/">
          <Home />
          Go to Dashboard
        </Link>
      </Button>
    </div>
  );
};

export default Redirection;
