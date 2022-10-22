import { Gitgraph } from '@gitgraph/react';
import { useRef } from 'react';
import { useRepoStore } from '../../controllers/repoStore';

const GraphView = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { gitRepo } = useRepoStore((state) => state);

  const func = Function('gitgraph', `${gitRepo.graphFunctionString}`);

  return (
    <div className="graphView">
      <p>Graph View</p>
      <div>
        <Gitgraph>{func as any}</Gitgraph>
      </div>
    </div>
  );
};
export default GraphView;
