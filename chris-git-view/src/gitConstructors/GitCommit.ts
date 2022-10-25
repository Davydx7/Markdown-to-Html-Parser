import GitBranch from './GitBranch';
import { File } from './GitRepo';

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
  public file: File;

  public subject?: string;
  public body?: string;
  public hash?: string;
  public parents?: string[];

  constructor(branch: GitBranch, commitName: string, file: File) {
    this.author = {};
    this.branches = [];
    this.tags = [];
    this.commitName = commitName;
    this.file = file;

    this.branches.push(branch);
  }

  public addBranch(branch: GitBranch): void {
    this.branches.push(branch);
  }

  public fileChanged(): void {
    // fileChanged
  }
}

export default GitCommit;
