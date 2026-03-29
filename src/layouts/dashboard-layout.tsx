import Footer from "@/components/footer/footer";
import Navigation from "@/components/navigation/navigation";
import { Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
};

export default DashboardLayout;
