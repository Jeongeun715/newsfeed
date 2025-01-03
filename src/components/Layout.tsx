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
          <Link to="/">
            <img src="/logo.svg" alt="Logo" />
          </Link>
          <div className="flex space-x-4">
            {(() => {
              if (user) {
                return (
                  <>
                    <Link
                      to="/mypage"
                      className="text-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 hover:underline "
                    >
                      {user.nickname}
                    </Link>
                    <Link
                      to="/"
                      className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 "
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
                      className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 "
                    >
                      로그인
                    </Link>
                    <Link
                      to="/signup"
                      className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 "
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
