import { create } from "zustand";

interface User {
  id: string;
  email: string;
  nickname: string;
}

interface AuthStore {
  user: User | null;
  setUser: (user: User | null) => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  user: null, //현재 로그인된 정보는 없다.
  setUesr: (user) => set({ user }),
}));

export default useAuthStore;
