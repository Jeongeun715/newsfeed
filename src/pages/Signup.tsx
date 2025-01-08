import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../utils/supabase";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    //입력내용 저장, 내가 입력한 글자
  };

  const onNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onPasswordConfirmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirm(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //유효성 검사
    if (!nickname) {
      //닉네임에 값이 없으면
      alert("닉네임을 입력해주세요.");
      return;
    }

    if (nickname.length <= 2) {
      alert("닉네임은 3글자 이상이여야 합니다.");
      return;
    }

    // 이메일 기본 형식을 변수로 줌
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      alert("이메일 형식이 올바르지 않습니다.");
      return;
    }

    if (password.length < 8) {
      alert("비밀번호는 8자 이상이여야 합니다.");
      return;
    }

    if (password !== passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    //1. supabase 회원가입
    const { data, error } = await supabase.auth.signUp({
      email: email, //키랑 변수랑 같으면 생략가능
      password: password,
      //닉네임 넣기
      options: {
        data: {
          nickname,
        },
      },
    });

    if (error) {
      alert("회원가입에 실패했습니다.");
    }

    // 2. users 테이블에도 넣어준다
    const { error: userError } = await supabase.from("users").insert({
      id: data.user?.id,
      email: email,
      nickname: nickname,
    });

    if (userError) {
      alert("유저 생성에 실패했습니다.");
      return;
    }
    alert("회원가입에 성공했습니다.");
    navigate("/");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">회원가입</h1>
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
              닉네임
            </label>
            <input
              id="nickname"
              name="nickname"
              type="nickname"
              placeholder="닉네임을 입력해주세요."
              className="border border-gray-300 rounded-md p-2"
              value={nickname} //상태값과 연결하기
              onChange={onNicknameChange} //입력값 변경시 상태 업데이트
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
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-sm">
              비밀번호 확인
            </label>
            <input
              id="passwordConfirm"
              name="passwordConfirm"
              type="password"
              placeholder="비밀번호를 한 번 더 입력해주세요."
              className="border border-gray-300 rounded-md p-2"
              value={passwordConfirm} //상태값과 연결하기
              onChange={onPasswordConfirmChange} //입력값 변경시 상태 업데이트
            />
          </div>
          <button className="py-2 px-4 bg-blue-500 text-white rounded-md">
            회원가입
          </button>
          <Link
            to="/login"
            className="py-2 px-4 text-center text-blue-500 border border-blue-500 rounded-md"
          >
            로그인하러 가기
          </Link>
        </form>
      </div>
    </>
  );
};

export default Signup;
