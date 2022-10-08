class GitPullRequest {
  public commits: object[];
  public branches: object[];
  public currentBranch: object;
  public author: string;

  constructor() {
    this.author = '';
    this.branches = [];
    this.currentBranch = {};
    this.commits = [];
  }
}

export default GitPullRequest;
