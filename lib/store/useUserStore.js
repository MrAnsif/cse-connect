import { create } from "zustand";

export const useUserStore = create((set) => ({
  role: "student", // default
  setRole: (role) => set({ role }),
}));
