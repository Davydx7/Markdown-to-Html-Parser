import create from 'zustand';

import GitRepo from '../gitConstructors/GitRepo';
import GitBranch from '../gitConstructors/GitBranch';

interface GitRepoStore {
  gitRepo: GitRepo | null;
  gitBranch: GitBranch | null;
  createRepo: (name: string) => void;
  createBranch: (branchName: string, gitRepo: GitRepo) => void;
  createCommit: (branchName: string) => void;
}

export const useRepoStore = create<GitRepoStore>((set, get) => ({
  gitRepo: null,
  gitBranch: null,

  createRepo: (name: string) => {
    const repo = new GitRepo(name);
    set({ gitRepo: repo });
  },

  createBranch: (name: string) => {
    if (get().gitRepo !== null) {
      const branch = get().gitRepo!.createBranch(name);
      set({ gitBranch: branch });
    }
  },

  createCommit: (commitName: string) => {
    if (get().gitBranch !== null) {
      const updatedBranch = get().gitBranch!.createCommit(commitName);
      set({ gitBranch: updatedBranch });
    }
  }
}));
