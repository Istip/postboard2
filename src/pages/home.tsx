import { useAuthStore } from "@/stores/auth.store";

const Home = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <>
      Hello <b>{user ? user.name : "Guest"}</b>
      <br />
      <br />
      <br />
      <p>Welcome to the home page!</p>
      <p>Welcome to the home page!</p>
      <p>Welcome to the home page!</p>
      <p>Welcome to the home page!</p>
      <p>Welcome to the home page!</p>
      <p>Welcome to the home page!</p>
      <p>Welcome to the home page!</p>
      <p>Welcome to the home page!</p>
      <p>Welcome to the home page!</p>
      <p>Welcome to the home page!</p>
      <p>Welcome to the home page!</p>
      <p>Welcome to the home page!</p>
      <p>Welcome to the home page!</p>
      <p>Welcome to the home page!</p>
      <p>Welcome to the home page!</p>
      <p>Welcome to the home page!</p>
      <p>Welcome to the home page!</p>
      <p>Welcome to the home page!</p>
      <p>Welcome to the home page!</p>
      <p>Welcome to the home page!</p>
      <p>Welcome to the home page!</p>
      <p>Welcome to the home page!</p>
      <p>Welcome to the home page!</p>
      <p>Welcome to the home page!</p>
      <p>Welcome to the home page!</p>
      <p>Welcome to the home page!</p>
      <p>Welcome to the home page!</p>
      <p>Welcome to the home page!</p>
      <p>Welcome to the home page!</p>
      <p>Welcome to the home page!</p>
      <p>Welcome to the home page!</p>
      <p>Welcome to the home page!</p>
      <p>Welcome to the home page!</p>
      <p>Welcome to the home page!</p>
      <p>Welcome to the home page!</p>
      <p>Welcome to the home page!</p>
      <p>Welcome to the home page!</p>
      <p>Welcome to the home page!</p>
      <p>Welcome to the home page!</p>
      <p>Welcome to the home page!</p>
      <p>Welcome to the home page!</p>
      <p>Welcome to the home page!</p>
    </>
  );
};

export default Home;
