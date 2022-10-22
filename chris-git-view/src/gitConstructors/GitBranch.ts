import GitCommit from './GitCommit';
import GitRepo from './GitRepo';
import GitPullRequest from './GitPullRequest';

export interface File {
  name: string;
  type: string;
  content: string;
  lastModified: Date;
}

class GitBranch {
  public commits: GitCommit[];
  public author: object;
  public branchName: string;
  public _gitRepo: GitRepo;
  public file: File;
  public index: File;

  constructor(name: string, gitRepo: GitRepo, file: File) {
    this.author = {};
    this.commits = [];
    this.branchName = name;
    this._gitRepo = gitRepo;
    this.file = file;
    this.index = file;
  }

  public createBranch(branchName: string = 'master'): GitBranch {
    // createBranch
    const branch = new GitBranch(branchName, this._gitRepo, this.file);
    this._gitRepo.branches.set(branchName, branch);

    this._gitRepo.currentBranch = branch;

    this._gitRepo.graphFunctionString += `const ${branchName} = ${this.branchName}.branch("${branchName}");`;

    return branch;
  }

  public createCommit(name: string) {
    // commit
    const newCommit = new GitCommit(this, name, this.index);
    this.commits.push(newCommit);
    this._gitRepo.commits.push(newCommit);

    this._gitRepo.graphFunctionString += `${this.branchName}.commit("${name}");`;

    alert(this._gitRepo.graphFunctionString);

    return this;
  }

  public add() {
    // add
    this.index = this.file;
  }

  // public stash () {
  // 	// stash
  // }

  public merge() {
    // merge
  }

  public checkout() {
    // checkout this branch
    this._gitRepo.currentBranch = this;
    this._gitRepo.graphFunctionString += `${this.branchName}.checkout();`;
  }

  public rebase() {
    // rebase
  }

  public pullRequest(otherBranch: GitBranch) {
    // rebase
    const pullRequest = new GitPullRequest(this, otherBranch);

    this._gitRepo.pullRequests.push(pullRequest);
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
}

export default GitBranch;
