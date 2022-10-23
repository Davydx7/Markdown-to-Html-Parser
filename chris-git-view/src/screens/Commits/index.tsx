import { useRepoStore } from '../../controllers/repoStore';

import './commits.scss';

const Commits = () => {
  const { gitRepo } = useRepoStore((state) => state);
  return (
    <div>
      <ul>
        {gitRepo.commits.map((commit) => (
          <li key={commit.commitName}>{commit.commitName}</li>
        ))}
      </ul>
    </div>
  );
};
export default Commits;
