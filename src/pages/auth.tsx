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
      <div className="center text-muted bg-primary h-[33vh] md:h-auto p-4 text-center">
        <h1 className="text-4xl font-extralight">
          Welcome to <span>Postboard</span>
        </h1>
      </div>

      <div className="mx-auto md:my-auto w-full max-w-md p-4 mt-0">
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
          <TabsContent value="login" className="min-h-[400px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Login />
            </motion.div>
          </TabsContent>
          <TabsContent value="register" className="min-h-[400px]">
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
