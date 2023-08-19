import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      {/* navigation */}
      nav
      {/* content */}
      <Outlet />
    </>
  );
}
