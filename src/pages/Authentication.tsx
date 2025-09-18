import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/stores/auth.store";
import { ID } from "@/lib/appwrite";

const Authentication = () => {
  const user = useAuthStore((state) => state.user);
  const error = useAuthStore((state) => state.error);
  const loading = useAuthStore((state) => state.loading);
  const register = useAuthStore((state) => state.register);
  const login = useAuthStore((state) => state.login);
  const logout = useAuthStore((state) => state.logout);
  const fetchUser = useAuthStore((state) => state.fetchUser);

  useEffect(() => {
    if (!user) {
      fetchUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRegister = async () => {
    const id = ID.unique();
    register(id, "example@email.com", "", "John Doe");
  };

  const handleLogin = async () => {
    login("example@email.com", "");
  };

  const handleLogout = async () => {
    logout();
  };

  return (
    <div>
      {error && <p className="text-red-500">{error}</p>}
      Authentication
      <Button disabled={loading} variant="default" onClick={handleRegister}>
        REGISTER
      </Button>
      <Button disabled={loading} variant="secondary" onClick={handleLogin}>
        LOGIN
      </Button>
      <Button disabled={loading} variant="destructive" onClick={handleLogout}>
        LOGOUT
      </Button>
      {user && JSON.stringify(user, null, 2)}
    </div>
  );
};

export default Authentication;
