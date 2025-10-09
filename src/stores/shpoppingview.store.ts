import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type ShoppingViewState = {
  view: "mixed" | "grouped";
  setView: (view: "mixed" | "grouped") => void;
};

export const useShoppingViewStore = create(
  persist<ShoppingViewState>(
    (set) => ({
      view: "grouped",
      setView: (view) => set({ view }),
    }),
    {
      name: "shopping-view",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
