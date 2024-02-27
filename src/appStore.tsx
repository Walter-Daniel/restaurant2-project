import { create, StateCreator } from 'zustand';
import { persist } from 'zustand/middleware';

interface AppStore {
  dopen: boolean;
  updateOpen: (dopen: boolean) => void;
}

const useAppStore = create<AppStore>(
  persist(
    (set) => ({
      dopen: true,
      updateOpen: (dopen) => set((state) => ({ ...state, dopen })),
    }),{ name: 'my_app_store' }) as StateCreator<AppStore>
);

export { useAppStore };
