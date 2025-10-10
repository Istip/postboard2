import { useEffect } from "react";
import { useAuthStore } from "@/stores/auth.store";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Route, BrowserRouter as Router, Routes } from "react-router";

// Pages
import Authentication from "@/pages/auth";
import ShoppingList from "@/pages/shopping";
import Tutorial from "@/pages/tutorial";
import Notes from "@/pages/notes";
import Private from "@/pages/private";

// Layouts
import DashboardLayout from "@/layouts/dashboard-layout";
import { Toaster } from "@/components/ui/sonner";
import { AnimatedDialogProvider } from "@/components/ui/animated-dialog";

export default function App() {
  const fetchUser = useAuthStore((state) => state.fetchUser);
  const loading = useAuthStore((state) => state.loading);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  if (loading) return null;

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AnimatedDialogProvider>
        <Router>
          <Routes>
            <Route path="auth" element={<Authentication />} />
            <Route element={<DashboardLayout />}>
              <Route index element={<ShoppingList />} />
              <Route path="tutorial" element={<Tutorial />} />
              <Route path="notes" element={<Notes />} />
              <Route path="private" element={<Private />} />
            </Route>
          </Routes>
        </Router>
        <Toaster position="top-right" />
      </AnimatedDialogProvider>
    </ThemeProvider>
  );
}
