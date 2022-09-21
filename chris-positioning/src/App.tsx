import { useState } from 'react';
import './App.scss';
import AbsolutePanel from './components/AbsolutePanel';
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
      <div className="column-1">
        <p style={{ color: 'green' }}> Absolute positioning </p>
        <pre>{absoluteStyle}</pre>
        <p style={{ color: 'green' }}> Relative positioning </p>
        <pre>{relativeStyle}</pre>
      </div>

      {/* middle display column */}
      <div className="column-2">
        <div className="parentElement" title="viewport">
          <div className="anchor" title="anchor">
            <div className="pivot" title="pivot">
              <div className="childElement" title="positioned element" />
            </div>
          </div>
        </div>
      </div>

      {/* right input column */}
      <div className="column-3">
        <div className="position">
          <button onClick={() => setIsAbsolute(true)} disabled={isAbsolute}>
            Absolute
          </button>
          <button onClick={() => setIsAbsolute(false)} disabled={!isAbsolute}>
            Relative
          </button>
        </div>
        {isAbsolute ? <AbsolutePanel /> : <RelativePanel />}
      </div>
    </div>
  );
}

export default App;
