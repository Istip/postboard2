import { useEffect } from "react";
import { useAuthStore } from "@/stores/auth.store";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Route, BrowserRouter as Router, Routes } from "react-router";
import DashboardLayout from "@/layouts/dashboard-layout";
import Authentication from "@/pages/auth";
import Home from "@/pages/home";

export default function App() {
  const fetchUser = useAuthStore((state) => state.fetchUser);
  const loading = useAuthStore((state) => state.loading);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  if (loading) return null;

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path="auth" element={<Authentication />} />
          <Route element={<DashboardLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
