import { useAuthStore } from "@/stores/auth.store";

const Home = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <>
      Hello <b>{user ? user.name : "Guest"}</b>
      <div contentEditable className="border">
        Welcom to the home page!
      </div>
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
