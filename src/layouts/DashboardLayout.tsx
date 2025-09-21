import Navigation from "@/components/Navigation/Navigation";
import { Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <>
      <Navigation />
      <div className="p-4">
        <Outlet />
      </div>
    </>
  );
};

export default DashboardLayout;
