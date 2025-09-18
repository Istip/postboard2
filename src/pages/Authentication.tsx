import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/stores/auth.store";
import Register from "@/components/Authentication/Register";

const Authentication = () => {
  const user = useAuthStore((state) => state.user);
  const loading = useAuthStore((state) => state.loading);
  const login = useAuthStore((state) => state.login);
  const logout = useAuthStore((state) => state.logout);
  const fetchUser = useAuthStore((state) => state.fetchUser);

  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogin = async () => {
    login("", "");
  };

  const handleLogout = async () => {
    logout();
  };

  return (
    <div>
      <Button disabled={loading} variant="secondary" onClick={handleLogin}>
        LOGIN
      </Button>
      <Button disabled={loading} variant="destructive" onClick={handleLogout}>
        LOGOUT
      </Button>
      <code>
        <pre>{user && JSON.stringify(user, null, 2)}</pre>
      </code>
      <Register />
    </div>
  );
};

export default Authentication;
