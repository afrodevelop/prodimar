import {create} from "zustand";

interface UiStore {
  search: {
    inSearch: boolean;
    setInSearch: (inSearch: boolean) => void;
  }
}

export const useUiStore = create<UiStore>((set, get) => ({
  search: {
    inSearch: false,
    setInSearch: (inSearch: boolean) => set({search: { ...get().search, inSearch }}),
  }
}));