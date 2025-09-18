import { ThemeProvider } from "@/components/Theme/ThemeProvider";
import { Route, BrowserRouter as Router, Routes } from "react-router";
import DashboardLayout from "@/layouts/DashboardLayout";
import Authentication from "@/pages/Authentication";
import Dashboard from "@/pages/Dashboard";
import Home from "@/pages/Home";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="auth" element={<Authentication />} />

          <Route element={<DashboardLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
