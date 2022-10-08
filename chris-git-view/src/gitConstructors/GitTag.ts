class GitTag {
  public commits: object[];
  public branches: object[];
  public author: object;

  public subject?: string;
  public body?: string;
  public hash?: string;
  public parents?: string[];

  constructor() {
    this.author = {};
    this.branches = [];
    this.commits = [];
  }
}

export default GitTag;
