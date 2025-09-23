import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { account } from "@/lib/appwrite";
import { type Models } from "appwrite";

type AuthState = {
  user: Models.User | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<Models.User | null>;
  register: (
    id: string,
    email: string,
    password: string,
    name: string
  ) => Promise<Models.User | null>;
  logout: () => Promise<void>;
  fetchUser: () => Promise<Models.User | null>;
};

export const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      user: null,
      loading: false,
      error: null,

      register: async (
        id: string,
        email: string,
        password: string,
        name: string
      ) => {
        set({ loading: true, error: null });
        try {
          const user = await account.create(id, email, password, name);
          set({ user, loading: false });
          return user;
        } catch (error) {
          set({ error: (error as Error).message, loading: false });
          return null;
        }
      },

      login: async (email: string, password: string) => {
        set({ loading: true, error: null });
        try {
          await account.createEmailPasswordSession(email, password);
          const user = await account.get();
          set({ user, loading: false });
          return user;
        } catch (error) {
          set({ error: (error as Error).message, loading: false });
          return null;
        }
      },

      logout: async () => {
        set({ loading: true, error: null });
        try {
          await account.deleteSession("current");
          set({ user: null, loading: false });
        } catch (error) {
          set({ error: (error as Error).message, loading: false });
        }
      },

      fetchUser: async () => {
        set({ loading: true, error: null });
        try {
          const user = await account.get();
          set({ user, loading: false });
          return user;
        } catch (error) {
          set({ user: null, error: null, loading: false });
          return null;
        }
      },
    }),
    {
      name: "auth-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
