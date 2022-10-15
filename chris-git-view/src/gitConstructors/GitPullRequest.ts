import GitBranch from './GitBranch';

class GitPullRequest {
  public commits: object[];
  public branches: object[];
  public currentBranch: object;
  public author: string;

  constructor(toBranch: GitBranch, fromBranch: GitBranch) {
    this.author = '';
    this.branches = [];
    this.currentBranch = {};
    this.commits = [];
  }
}

export default GitPullRequest;
