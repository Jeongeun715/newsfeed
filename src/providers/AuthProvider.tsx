import { useEffect } from "react";
import useAuthStore from "../stores/useAuthStore";
import supabase from "../utils/supabase";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { setUser } = useAuthStore();

  // supabase에서 cctv 역할을 하는 기능
  // 유저가 로그인을 했는지 안했는지 계속 체크하는 기능
  // onAuthStateChange

  useEffect(() => {
    supabase.auth.onAuthStateChange((_, session) => {
      if (session && session.user.email) {
        //만약에 로그인 한 유저가 있으면
        setUser({
          id: session.user.id,
          email: session.user.email,
          nickname: session.user.user_metadata.nickname,
        });
      } else {
        setUser(null);
      }
    });
  }, [setUser]);
  return <>{children}</>;
};

export default AuthProvider;
