import { Gitgraph } from '@gitgraph/react';
import { ReactNode, useEffect, useRef } from 'react';
import { useRepoStore } from '../../controllers/repoStore';

const Branches = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { gitRepo } = useRepoStore((state) => state);

  const func = Function('gitgraph', `${gitRepo.graphFunctionString}`);

  const branches: ReactNode[] = [];

  gitRepo.branches.forEach((branch) =>
    branches.push(<li key={branch.branchName}>{branch.branchName}</li>)
  );

  return (
    <div>
      <p>All branches</p>
      <ul>{branches}</ul>
    </div>
  );
};
export default Branches;
