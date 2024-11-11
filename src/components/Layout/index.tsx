import { Outlet, useLocation } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
  const location = useLocation();
  const hideFooter = location.pathname === "/" || location.pathname === "/my-account";

  return (
    <div>
      <Header />
      <Outlet />
      {!hideFooter && <Footer />}
    </div>
  );
}
