import Footer from "@/components/Footer/Footer";
import Navigation from "@/components/Navigation/Navigation";
import { Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <>
      <Navigation />
      <div className="p-4 min-h-[calc(100dvh-71px)] pb-[71px]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default DashboardLayout;
