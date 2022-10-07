class GitRepo {
	public commits: object[]
	public author: object

	constructor () {
		this.author = {}
		this.commits= []
	}

	public commit () {
		// commit
	}

	public merge () {
		// merge
	}

	public rebase () {
		// rebase
	}

	public delete () {
		// delete
	}

	getBranches () {
		// getBranches
	}

	getCommits () {
		// getCommits
	}

	getAuthor () {
		// getAuthor
	}

	getCurrentBranch () {
		// getCurrentBranch
	}
}

export default GitRepo;