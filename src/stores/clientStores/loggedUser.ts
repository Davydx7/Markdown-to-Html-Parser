import create, { State } from 'zustand';
import { User } from '../server/serverData/users';

interface LoggedUser extends State {
  loggedUser: User | undefined;
  setLoggedUser: (loggedUser: User | undefined) => void;
  getLoggedUser: () => User | undefined;
}

const useLoggedUser = create<LoggedUser>((set, get) => ({
  loggedUser: undefined,
  setLoggedUser: (loggedUser: User | undefined) => set((state) => ({ loggedUser })),
  getLoggedUser: () => get().loggedUser
}));

export default useLoggedUser;
