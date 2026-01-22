import Navigation from "@/components/navigation/navigation";
import { heights } from "@/lib/heights";
import { Outlet } from "react-router";

const SettingsLayout = () => {
  const height = heights.navigation;

  return (
    <div className={`pt-[${height}px]`}>
      <Navigation />
      <Outlet />
    </div>
  );
};

export default SettingsLayout;
