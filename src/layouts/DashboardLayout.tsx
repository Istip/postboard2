import { Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div>
      <nav>
        <ul className="center gap-2">
          <li>Dashboard</li>
          <li>Settings</li>
          <li>Profile</li>
        </ul>
      </nav>
      <Outlet />
      <footer className="center">Copyright © 2025</footer>
    </div>
  );
};

export default DashboardLayout;
