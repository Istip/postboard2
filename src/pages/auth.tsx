import { useAuthStore } from "@/stores/auth.store";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Login from "@/components/authentication/login";
import Register from "@/components/authentication/register";
import Redirection from "@/components/helpers/redirection";

const Authentication = () => {
  const user = useAuthStore((state) => state.user);

  if (user) {
    return <Redirection />;
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
