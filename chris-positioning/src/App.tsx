import { useState } from 'react';
import './App.scss';
import UnityPanel from './components/UnityPanel';
import Display from './components/Display';
import OutputPanel from './components/OutputPanel';
import CssPanel from './components/CssPanel';

function App() {
  const [isAbsolute, setIsAbsolute] = useState<boolean>(false);
  const [isUnity, setIsUnity] = useState<boolean>(true);

  return (
    <div className="app">
      {/* left output column */}
      <OutputPanel isAbsolute={isAbsolute} isUnity={isUnity} />

      {/* middle display column */}
      <Display isAbsolute={isAbsolute} isUnity={isUnity} />

      {/* right input column */}
      <aside className="column-3">
        <span>Input Type</span>
        <div className="mode">
          <button onClick={() => setIsUnity(true)} className={isUnity ? 'selected' : ''}>
            Unity
          </button>
          <button onClick={() => setIsUnity(false)} className={isUnity ? '' : 'selected'}>
            CSS
          </button>
        </div>
        <hr />
        <div className="position">
          <button onClick={() => setIsAbsolute(true)} className={isAbsolute ? 'selected' : ''}>
            Absolute
          </button>
          <button onClick={() => setIsAbsolute(false)} className={isAbsolute ? '' : 'selected'}>
            Relative
          </button>
        </div>
        <hr />
        {isUnity ? <UnityPanel isAbsolute={isAbsolute} /> : <CssPanel isAbsolute={isAbsolute} />}
      </aside>
    </div>
  );
}

export default App;
