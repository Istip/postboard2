import Footer from "@/components/footer/footer";
import Navigation from "@/components/navigation/navigation";
import { Outlet } from "react-router";
import { heights } from "@/lib/heights";

const DashboardLayout = () => {
  return (
    <>
      <Navigation />
      <div
        className={`px-4 py-8 min-h-[calc(100dvh-${heights.navigation}px)] pb-[${heights.footer}px] pt-[${heights.footer}px] my-4 bg-background`}
      >
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default DashboardLayout;
