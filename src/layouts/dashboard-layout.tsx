import Footer from "@/components/footer/footer";
import Navigation from "@/components/navigation/navigation";
import { Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <>
      <Navigation />
      <div className="px-4 py-8 min-h-[calc(100dvh-71px)] pb-[71px] pt-[71px] my-4">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default DashboardLayout;
