import { create } from 'zustand';

interface State {
  bears: number;
  increase: (by: number) => void;
}

const store = create<State>()((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
}));

export default store;
