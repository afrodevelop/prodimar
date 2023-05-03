import create from "zustand";

interface CategoriesStore {
  categories: string[];
  addCategories: (categories: string) => void;
  removeCategories: (categories: string) => void;
}

export const useCategoriesStore = create<CategoriesStore>((set, get) => ({
  categories: [],
  addCategories: (categories: string) => {
    set((state) => ({
      categories: [...state.categories, categories],
    }));
  },
  removeCategories: (categories: string) => {
    set((state) => ({
      categories: state.categories.filter((c) => c !== categories),
    }));
  }
}));