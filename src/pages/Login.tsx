import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../utils/supabase";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //유효성 검사
    if (!email) {
      alert("이메일을 입력해주세요.");
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      alert("이메일 형식이 올바르지 않습니다.");
      return;
    }

    if (!password) {
      alert("비밀번호를 입력해주세요.");
    }

    if (password.length < 8) {
      alert("비밀번호는 8자 이상이여야 합니다.");
      return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(`로그인에 실패했습니다. ${error.message}`);
      return;
    }

    alert("로그인에 성공했습니다.");
    navigate("/");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">로그인</h1>
        <form onSubmit={onSubmit} className="flex flex-col gap-4 w-80">
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
              value={email} //상태값과 연결하기
              onChange={onEmailChange} //입력값 변경시 상태 업데이트
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
              value={password} //상태값과 연결하기
              onChange={onPasswordChange} //입력값 변경시 상태 업데이트
            />
          </div>
          <button
            className="py-2 px-4 bg-blue-500 text-white rounded-md"
            type="submit"
          >
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
