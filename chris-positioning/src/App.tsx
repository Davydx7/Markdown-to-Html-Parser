import { useState } from 'react';
import './App.scss';
import AbsolutePanel from './components/AbsolutePanel';
import Display from './components/Display';
import OutputPanel from './components/OutputPanel';
import RelativePanel from './components/RelativePanel';

function App() {
  const [isAbsolute, setIsAbsolute] = useState<boolean>(false);

  return (
    <div className="app">
      {/* left output column */}
      <OutputPanel isAbsolute={isAbsolute} />

      {/* middle display column */}
      <Display isAbsolute={isAbsolute} />

      {/* right input column */}
      <aside className="column-3">
        <div className="position">
          <button onClick={() => setIsAbsolute(true)} className={!isAbsolute ? 'selected' : ''}>
            Absolute
          </button>
          <button onClick={() => setIsAbsolute(false)} className={isAbsolute ? 'selected' : ''}>
            Relative
          </button>
        </div>
        {isAbsolute ? <AbsolutePanel /> : <RelativePanel />}
      </aside>
    </div>
  );
}

export default App;
