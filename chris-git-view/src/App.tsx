import { useEffect, useRef, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Gitgraph } from '@gitgraph/react';
import { createGitgraph } from '@gitgraph/js';

function App(): JSX.Element {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current !== null) {
      const gitgraph = createGitgraph(ref.current);

      const master = gitgraph.branch('master');
      master.commit('Initial commit');

      const develop = gitgraph.branch('develop');
      develop.commit('Add TypeScript');

      const aFeature = gitgraph.branch('a-feature');
      aFeature.commit('Make it work').commit('Make it right').commit('Make it fast');

      develop.merge(aFeature);
      develop.commit('Prepare v1');

      master.merge(develop).tag('v1.0.0');
    }
  }, []);

  const func = Function(
    'gitgraph',
    `const master = gitgraph.branch('master');
  master.commit('Initial commit');
  const feature = master.branch('workesss');
  feature.commit('Add cool feature');
  master.commit('Release 1.0.0');`
  );

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div ref={ref}></div>
      <Gitgraph>{func as any}</Gitgraph>
    </div>
  );
}

export default App;
