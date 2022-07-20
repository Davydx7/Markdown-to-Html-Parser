import create from 'zustand';
import users, { User } from '../serverData/users';

export interface UserStore {
  serverUser: User | undefined;
  setServerUser: (serverUser: User) => void;
  getServerUser: () => User | undefined;
}

const useServerUser = create<UserStore>((set, get) => ({
  serverUser: undefined,
  setServerUser: (serverUser: User) => set((state) => ({ serverUser })),
  getServerUser: () => get().serverUser
}));

export default useServerUser;
