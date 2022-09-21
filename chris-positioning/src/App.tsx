import { useState } from 'react';
import './App.scss';

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
        <div className="controls">
          height
          <input type="number" onChange={(e) => setUp(+e.currentTarget.value)} />
          width
          <input type="number" onChange={(e) => setRight(+e.currentTarget.value)} />
          top
          <input type="number" onChange={(e) => setDown(+e.currentTarget.value)} />
          left
          <input type="number" onChange={(e) => setLeft(+e.currentTarget.value)} />
        </div>
      </div>
    </div>
  );
}

export default App;
