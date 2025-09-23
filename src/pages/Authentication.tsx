import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuthStore } from "@/stores/auth.store";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Register from "@/components/Authentication/Register";
import Login from "@/components/Authentication/Login";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const Authentication = () => {
  const time = 5;

  const [counter, setCounter] = useState(time);
  const user = useAuthStore((state) => state.user);
  const loading = useAuthStore((state) => state.loading);

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

  // Navigate when counter reaches 0
  useEffect(() => {
    if (user && counter <= 0) {
      navigate("/");
    }
  }, [user, counter, navigate]);

  if (loading) return null;

  if (user) {
    return (
      <div className="flex flex-col justify-center items-center gap-4 w-screen h-[100dvh]">
        <div className="text-center">
          <p>
            You are already logged in as{" "}
            <b className="text-primary">{user.name}</b>
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
  }

  return (
    <Tabs defaultValue="login">
      <TabsList className="w-full mb-6">
        <TabsTrigger className="cursor-pointer" value="login">
          LOGIN
        </TabsTrigger>
        <TabsTrigger className="cursor-pointer" value="register">
          REGISTER
        </TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <Login />
      </TabsContent>
      <TabsContent value="register">
        <Register />
      </TabsContent>
    </Tabs>
  );
};

export default Authentication;
