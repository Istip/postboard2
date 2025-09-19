import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Register from "@/components/Authentication/Register";
import Login from "@/components/Authentication/Login";

const Authentication = () => {
  return (
    <>
      <p className="text-center pb-6">Yo mate, welcome!</p>
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
    </>
  );
};

export default Authentication;
