import { Link } from "react-router-dom";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const hideHeaderPaths = ["/signup", "/login"];
  const shouldShowHeader = !hideHeaderPaths.includes(location.pathname);

  const user = {
    nickname: "쩡으니",
  };

  return (
    <>
      {shouldShowHeader && (
        <header className="flex justify-between items-center p-4 border-b border-gray-200 bg-white mb-10">
          <img src="/logo.svg" alt="Logo" />
          <div className="flex space-x-4">
            {(() => {
              if (user) {
                return (
                  <>
                    <span className="text-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 ">
                      {user.nickname}
                    </span>
                    <Link
                      to="/logout"
                      className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    >
                      로그아웃
                    </Link>
                  </>
                );
              } else {
                return (
                  <>
                    <Link
                      to="/login"
                      className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    >
                      로그인
                    </Link>
                    <Link
                      to="/signup"
                      className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    >
                      회원가입
                    </Link>
                  </>
                );
              }
            })()}
          </div>
        </header>
      )}
      <Outlet />
    </>
  );
};

export default Layout;
