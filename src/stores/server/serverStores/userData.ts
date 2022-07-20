import create from 'zustand';
import users, { User } from '../serverData/users';

export interface UserStore {
  user: User | undefined;
  setUser: (user: User) => void;
  getUser: () => User | undefined;
}

const useUser = create<UserStore>((set, get) => ({
  user: undefined,
  setUser: (user: User) => set((state) => ({ user })),
  getUser: () => get().user
}));

export default useUser;
