import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">로그인</h1>
        <form className="flex flex-col gap-4 w-80">
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-sm">
              이메일
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="이메일을 입력해주세요."
              className="border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-sm">
              비밀번호
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="비밀번호를 입력해주세요."
              className="border border-gray-300 rounded-md p-2"
            />
          </div>
          <button className="py-2 px-4 bg-blue-500 text-white rounded-md">
            로그인
          </button>
          <Link
            to="/signup"
            className="py-2 px-4 text-center text-blue-500 border border-blue-500 rounded-md"
          >
            회원가입하러 가기
          </Link>
        </form>
      </div>
    </>
  );
};

export default Login;
