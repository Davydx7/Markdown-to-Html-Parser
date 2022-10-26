export interface File {
  name: string;
  type: string;
  content: string;
  lastModified: Date;
}

export interface Directory {
  [key: string]: File | Directory;
}

export type paths = string[];

// const intialFile: File = {
//   name: 'initialFile',
//   content: 'initialContent of file',
//   type: 'text',
//   lastModified: new Date()
// };

class GitDirectory {
  public author: object;
  public repoName: string;
  public workingDirectory: Directory;
  public stagingArea: Directory;
  // public file: File;

  constructor(repoName: string) {
    this.repoName = repoName;
    this.author = {};
    this.workingDirectory = {};
    this.stagingArea = {};
    // this.file = intialFile;
  }

  public saveFile(file: File): void {
    // saveFile
  }

  // public getFile(): File {
  // }

  public add(file: File): void {
    // add
  }

  public createFile(file: File): void {
    // createFile
  }

  public renameFile(file: File): void {
    // deleteFile
  }

  public deleteFile(file: File): void {
    // deleteFile
  }

  public createFolder(file: File): void {
    // createFile
  }

  public renameFolder(file: File): void {
    // deleteFile
  }

  public deleteFolder(file: File): void {
    // deleteFile
  }

  public checkout(file: File): void {
    // checkout
  }

  public reset(file: File): void {
    // reset
  }

  public commit(message: string): void {
    // commit
  }
}

export default GitDirectory;
