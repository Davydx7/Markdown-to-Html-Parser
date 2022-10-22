import GitBranch, { File } from './GitBranch';
import GitCommit from './GitCommit';
import GitPullRequest from './GitPullRequest';
import GitTag from './GitTag';

const intialFile: File = {
  name: 'initialFile',
  content: 'initialContent of file',
  type: 'text',
  lastModified: new Date()
};

class GitRepo {
  public commits: GitCommit[];
  public branches: Map<string, GitBranch>;
  public currentBranch: GitBranch | null;
  public pullRequests: GitPullRequest[];
  public author: object;
  public tags: GitTag[];
  public repoName: string;
  public graphFunctionString: string;
  public file: File;

  constructor(repoName: string) {
    this.repoName = repoName;
    this.author = {};
    this.branches = new Map();
    this.currentBranch = null;
    this.pullRequests = [];
    this.commits = [];
    this.tags = [];
    this.graphFunctionString = '';

    this.file = intialFile;
    this.createBranch('master', intialFile);
  }

  public createBranch(branchName: string = 'master', file: File): GitBranch | undefined {
    // createBranch

    if (this.currentBranch != null) {
      this.currentBranch.createBranch(branchName);
    } else {
      const branch = new GitBranch(branchName, this, file);
      this.branches.set(branchName, branch);

      this.currentBranch = branch;

      this.graphFunctionString += `const ${branchName} = gitgraph.branch("${branchName}");`;

      return branch;
    }
  }

  public commit(name: string): void {
    // commit
    if (this.currentBranch != null) {
      this.currentBranch.createCommit(name);
    }
  }

  public checkoutBranch() {
    // checkoutBranch
  }

  public saveFile(file: File): void {
    // saveFile
    this.file = file;
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
