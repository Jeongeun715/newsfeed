import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const hideHeaderPaths = ["/signup", "/login"];
  const shouldShowHeader = !hideHeaderPaths.includes(location.pathname);
  //
  return (
    <>
      {shouldShowHeader && <header>헤더</header>}
      <Outlet />
    </>
  );
};

export default Layout;
