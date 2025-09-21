import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/stores/auth.store";

const Home = () => {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  return (
    <>
      Hello <b>{user ? user.name : "Guest"}</b>
      <br />
      <br />
      <br />
      <Button variant="outline" onClick={logout}>
        Logout
      </Button>
    </>
  );
};

export default Home;
