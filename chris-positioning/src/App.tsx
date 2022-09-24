import { useState } from 'react';
import './App.scss';
import AbsolutePanel from './components/AbsolutePanel';
import Display from './components/Display';
import RelativePanel from './components/RelativePanel';

function App() {
  const [isAbsolute, setIsAbsolute] = useState<boolean>(true);
  const [up, setUp] = useState(0);
  const [right, setRight] = useState(0);
  const [down, setDown] = useState(0);
  const [left, setLeft] = useState(0);

  const absoluteStyle = `Top: ${down}px \nLeft: ${left}px\nHeight: ${up}px\nWidth: ${right}px `;

  const relativeStyle = `Top: ${down}px \nLeft: ${left}px\nHeight: ${up}px\nWidth: ${right}px `;

  return (
    <div className="app">
      {/* left output column */}
      <aside className="column-1">
        <p style={{ color: 'green' }}> Absolute positioning </p>
        <pre>{absoluteStyle}</pre>
        <p style={{ color: 'green' }}> Relative positioning </p>
        <pre>{relativeStyle}</pre>
      </aside>

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
