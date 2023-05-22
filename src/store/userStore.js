import { create } from "zustand";

const useUserStore = create((set) => ({
  user: JSON.parse(localStorage.getItem("user")) || null,
  setUser: (user) => {
    set({ user });
    localStorage.setItem("user", JSON.stringify(user));
  },
}));

export default useUserStore;
