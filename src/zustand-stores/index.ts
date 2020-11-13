import create from 'zustand';
import { sleep } from 'src/utils/misc';

type CounterState = {
  count: number;
  loading: boolean;
  increase: (by: number) => void;
  asyncIncrease: (by: number) => Promise<void>;
};

const useCounterStore = create<CounterState>((set, get) => ({
  count: 0,
  loading: false,
  increase: by => set(state => ({ count: state.count + by })),
  asyncIncrease: async by => {
    set({ loading: true });
    await sleep(1000);
    set(state => ({
      loading: false,
      count: state.count + by,
    }));
  },
}));

export { useCounterStore };
