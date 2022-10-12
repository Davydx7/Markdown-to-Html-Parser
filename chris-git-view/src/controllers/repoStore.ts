import create from 'zustand';

import { createGitgraph } from '@gitgraph/js';

import GitRepo from '../gitConstructors/GitRepo';
import GitBranch from '../gitConstructors/GitBranch';

interface GitRepoStore {
  gitRepo: GitRepo | null;
  gitBranch: GitBranch | null;
  repoGraph: any;
  branchGraph: any;

  repoGraphString: string;

  refDiv?: HTMLDivElement | null;
  setRefDiv?: (ref: HTMLDivElement) => void;
  createRepo: (name: string) => void;
  createBranch: (branchName: string) => void;
  createCommit: (branchName: string) => void;
}

export const useRepoStore = create<GitRepoStore>((set, get) => ({
  gitRepo: null,
  gitBranch: null,
  refDiv: null,

  repoGraph: '',
  branchGraph: '',

  repoGraphString: '',

  createRepo: (name: string) => {
    const repo = new GitRepo(name);
    const repoGraph = createGitgraph(get().refDiv!);

    set({ gitRepo: repo });
    set({ repoGraph });
  },

  createBranch: (name: string) => {
    if (get().gitRepo !== null) {
      const branch = get().gitRepo!.createBranch(name);
      const branchGraph = get().repoGraph.branch(name);

      get().repoGraphString.concat(`const ${name} = gitgraph.branch('${name}');`);

      set({ gitBranch: branch });
      set({ branchGraph });
    }
  },

  createCommit: (commitName: string) => {
    if (get().gitBranch !== null) {
      const updatedBranch = get().gitBranch!.createCommit(commitName);
      set({ gitBranch: updatedBranch });

      get().branchGraph.commit(commitName);
    }
  },

  setRefDiv(ref) {
    set({ refDiv: ref });
  }
}));
