import create, { State } from 'zustand';
import { User } from '../serverData/users';

// Mock data base of registered User
export interface UserStore extends State {
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
