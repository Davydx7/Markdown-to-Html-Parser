class GitRepo {
	public commits: object[]
	public branches: object[]
	public currentBranch: object
	public author: object

	constructor () {
		this.author = {}
		this.branches= []
		this.currentBranch= {}
		this.commits= []
	}

	public createBranch () {
		// createBranch
	}

	public checkoutBranch () {
		// checkoutBranch
	}

	public commit () {
		// commit
	}

	public push () {
		// push
	}

	public pull () {
		// pull
	}

	public merge () {
		// merge
	}

	public fetch () {
		// fetch
	}

	public clone () {
		// clone
	}

	public rebase () {
		// rebase
	}

	public stash () {
		// stash
	}

	public add () {
		// add
	}

	public status () {
		// status
	}

	public diff () {
		// diff
	}
	public tag () {
		// tag
	}
	public remote () {
		// remote
	}
	public remove () {
		// remove
	}

	public rename () {
		// rename
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