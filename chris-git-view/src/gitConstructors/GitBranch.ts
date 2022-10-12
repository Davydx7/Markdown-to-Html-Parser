import GitCommit from './GitCommit';
import GitRepo from './GitRepo';

class GitBranch {
  public commits: GitCommit[];
  public author: object;
  public branchName: string;
  public _gitRepo: GitRepo;

  constructor(name: string, gitRepo: GitRepo) {
    this.author = {};
    this.commits = [];
    this.branchName = name;
    this._gitRepo = gitRepo;
  }

  public createBranch(branchName: string = 'master'): GitBranch {
    // createBranch
    const branch = new GitBranch(branchName, this._gitRepo);
    this._gitRepo.branches.set(branchName, branch);

    this._gitRepo.currentBranch = branch;

    this._gitRepo.graphFunctionString += `const ${branchName} = ${this.branchName}.branch("${branchName}");`;

    return branch;
  }

  public createCommit(name: string) {
    // commit
    const newCommit = new GitCommit(this, name);
    this.commits.push(newCommit);

    this._gitRepo.graphFunctionString += `${this.branchName}.commit("${name}");`;

    alert(this._gitRepo.graphFunctionString);

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
