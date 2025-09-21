import { useAuthStore } from "@/stores/auth.store";

const Home = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <>
      Hello <b>{user ? user.name : "Guest"}</b>
    </>
  );
};

export default Home;
