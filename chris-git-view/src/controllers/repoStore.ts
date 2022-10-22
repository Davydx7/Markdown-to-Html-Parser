import create from 'zustand';

import { createGitgraph } from '@gitgraph/js';

import GitRepo from '../gitConstructors/GitRepo';

interface GitRepoStore {
  gitRepo: GitRepo;

  setGitRepo: (name: string) => void;

  refDiv?: HTMLDivElement | null;
  setRefDiv?: (ref: HTMLDivElement) => void;
}

export const useRepoStore = create<GitRepoStore>((set, get) => ({
  gitRepo: new GitRepo('myRepo'),
  refDiv: null,

  setGitRepo(name) {
    set({ gitRepo: new GitRepo(name) });
  },

  setRefDiv(ref) {
    set({ refDiv: ref });
  }
}));
