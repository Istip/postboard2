import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuthStore } from "@/stores/auth.store";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Register from "@/components/Authentication/Register";
import Login from "@/components/Authentication/Login";
import { Button } from "@/components/ui/button";

const Authentication = () => {
  const [counter, setCounter] = useState(5);
  const user = useAuthStore((state) => state.user);
  const loading = useAuthStore((state) => state.loading);

  const navigate = useNavigate();

  // Start countdown when user is present
  useEffect(() => {
    if (!user) return;
    setCounter(5);
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
      <>
        <div>
          You are already logged in as <b>{user.name}</b>
        </div>
        <div>
          Redirecting to home in <b>{counter}</b> seconds...
        </div>

        <Button asChild variant="default">
          <Link to="/">Go to home now</Link>
        </Button>
      </>
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
