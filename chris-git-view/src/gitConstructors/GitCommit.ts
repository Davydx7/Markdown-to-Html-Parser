import GitBranch from './GitBranch';

interface GitCommitOptions {
  branches: object[];
  author: object;
  tags: object[];
  subject: string;
  body: string;
  hash: string;
  parents: string[];
}

class GitCommit {
  public branches: object[];
  public author: object;
  public tags: object[];
  public commitName: string;

  public subject?: string;
  public body?: string;
  public hash?: string;
  public parents?: string[];

  constructor(branch: GitBranch, commitName: string) {
    this.author = {};
    this.branches = [];
    this.tags = [];
    this.commitName = commitName;

    this.branches.push(branch);
  }
}

export default GitCommit;
