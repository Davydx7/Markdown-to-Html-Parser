import GitCommit from './GitCommit';
import GitRepo from './GitRepo';

class GitBranch {
  public commits: GitCommit[];
  public author: object;
  public branchName: string;
  public _gitRepo: object;

  constructor(name: string, gitRepo: GitRepo) {
    this.author = {};
    this.commits = [];
    this.branchName = name;
    this._gitRepo = gitRepo;
  }

  public createCommit(name: string) {
    // commit
    const newCommit = new GitCommit(this, name);
    this.commits.push(newCommit);
    return this;
  }

  public merge() {
    // merge
  }

  public rebase() {
    // rebase
  }

  public delete() {
    // delete
  }

  getBranches() {
    // getBranches
  }

  getCommits() {
    // getCommits
  }

  getAuthor() {
    // getAuthor
  }

  getCurrentBranch() {
    // getCurrentBranch
  }
}

export default GitBranch;
