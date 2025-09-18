import { useAuthStore } from "@/stores/auth.store";

const Home = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <div>
      Hello <b>{user ? user.name : "Guest"}</b>
    </div>
  );
};

export default Home;
