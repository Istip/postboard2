import Navigation from "@/components/navigation/navigation";
import { heights } from "@/lib/heights";
import { Outlet } from "react-router";

const SettingsLayout = () => {
  const height = heights.navigation;

  return (
    <div
      style={{
        marginTop: `${height}px`,
      }}
    >
      <Navigation />
      <Outlet />
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quo
        voluptate voluptates vel quos, totam suscipit veritatis quisquam sequi
        vitae dolorum, facere magnam. Quos, voluptatum architecto porro aut ab
        necessitatibus!
      </h1>
    </div>
  );
};

export default SettingsLayout;
