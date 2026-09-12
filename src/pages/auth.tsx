import { useAuthStore } from "@/stores/auth.store";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Login from "@/components/authentication/login";
import Register from "@/components/authentication/register";
import Redirection from "@/components/helpers/redirection";
import { LogIn, UserPlus } from "lucide-react";
import { motion } from "motion/react";

const Authentication = () => {
  const user = useAuthStore((state) => state.user);

  if (user) {
    return <Redirection />;
  }

  return (
    <div className="grid md:grid-cols-2 gap-4 min-h-screen bg-background">
      <div className="center text-muted bg-primary h-[33vh] w-full fixed left-0 top-0 z-10 p-4 text-center md:static md:h-auto md:w-auto md:z-auto">
        <h1 className="text-4xl font-extralight">Welcome to Postboard</h1>
      </div>

      <div className="mx-auto mt-[33vh] w-full max-w-md p-4 md:mt-0 md:my-auto">
        <Tabs defaultValue="login">
          <TabsList className="w-full mb-6">
            <TabsTrigger className="cursor-pointer" value="login">
              <LogIn className="mr-2" size={16} />
              Already a member
            </TabsTrigger>
            <TabsTrigger className="cursor-pointer" value="register">
              <UserPlus className="mr-2" size={16} />I want to join
            </TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Login />
            </motion.div>
          </TabsContent>
          <TabsContent value="register">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Register />
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Authentication;
