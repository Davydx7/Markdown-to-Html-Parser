import { useRepoStore } from '../../controllers/repoStore';

const Commits = () => {
  const { gitRepo } = useRepoStore((state) => state);
  return (
    <div>
      {gitRepo?.commits.map((commit) => (
        <div key={commit.commitName}>{commit.commitName}</div>
      ))}
    </div>
  );
};
export default Commits;
