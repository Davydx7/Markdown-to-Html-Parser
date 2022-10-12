import GitBranch from './GitBranch';
import GitCommit from './GitCommit';
import GitTag from './GitTag';

class GitRepo {
  public commits: GitCommit[];
  public branches: Map<string, GitBranch>;
  public currentBranch: GitBranch | null;
  public author: object;
  public tags: GitTag[];
  public repoName: string;

  constructor(repoName: string) {
    this.repoName = repoName;
    this.author = {};
    this.branches = new Map();
    this.currentBranch = null;
    this.commits = [];
    this.tags = [];
  }

  public createBranch(branchName: string = 'master'): GitBranch {
    // createBranch
    const branch = new GitBranch(branchName, this);
    this.branches.set(branchName, branch);

    this.currentBranch = branch;

    return branch;
  }

  public checkoutBranch() {
    // checkoutBranch
  }

  public commit() {
    // commit
  }

  // public push () {
  // 	// push
  // }

  // public pull () {
  // 	// pull
  // }

  // public merge () {
  // 	// merge
  // }

  // public fetch () {
  // 	// fetch
  // }

  // public clone () {
  // 	// clone
  // }

  // public rebase () {
  // 	// rebase
  // }

  // public stash () {
  // 	// stash
  // }

  // public add () {
  // 	// add
  // }

  // public status () {
  // 	// status
  // }

  // public diff () {
  // 	// diff
  // }
  // public tag () {
  // 	// tag
  // }
  // public remote () {
  // 	// remote
  // }
  // public remove () {
  // 	// remove
  // }

  // public rename () {
  // 	// rename
  // }

  getBranches() {
    // getBranches
  }

  getCurrentBranch() {
    // getCurrentBranch
  }

  getCommits() {
    // getCommits
  }

  getAuthor() {
    // getAuthor
  }
}

export default GitRepo;
