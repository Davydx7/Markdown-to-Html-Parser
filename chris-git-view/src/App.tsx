import { useEffect, useRef, useState } from 'react';
import './App.css';
import { Gitgraph } from '@gitgraph/react';
import { useRepoStore } from './controllers/repoStore';
import useTestStore from './controllers/testStore';

import { faker } from '@faker-js/faker';

function App(): JSX.Element {
  const [graphString, setGraphString] = useState<string>('');
  const [showGraph, setShowGraph] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement>(null);
  const { setGitRepo, setRefDiv, gitRepo } = useRepoStore((state) => state);

  useEffect(() => {
    if (ref.current !== null) {
      setRefDiv!(ref.current);
      // const gitgraph = createGitgraph(ref.current);

      // const master = gitgraph.branch('master');
      // master.commit('Initial commit');

      // const develop = gitgraph.branch('develop');
      // develop.commit('Add TypeScript');

      // const aFeature = gitgraph.branch('a-feature');
      // aFeature.commit('Make it work').commit('Make it right').commit('Make it fast');

      // develop.merge(aFeature);
      // develop.commit('Prepare v1');

      // master.merge(develop).tag('v1.0.0');
    }
  }, []);

  const func = Function('gitgraph', `${graphString}`);

  console.log(graphString);

  const { obj, unrelated, setObj, setUnrelated } = useTestStore((state) => state);

  return (
    <div className="App">
      <div>
        <span>{obj.test}</span>
      </div>
      <div>
        <button onClick={() => setGitRepo('myRepo')}>create repo</button>
        <button onClick={() => gitRepo?.createBranch(faker.lorem.word())}>create branch</button>
        <button onClick={() => gitRepo?.commit('commit')}>commit</button>
        <button onClick={() => setGraphString(gitRepo!.graphFunctionString)}>DrawGraph</button>
        <button onClick={() => setShowGraph(!showGraph)}>toggle Graph</button>
      </div>
      <div ref={ref}></div>
      {showGraph && <Gitgraph>{func as any}</Gitgraph>}
    </div>
  );
}

export default App;
