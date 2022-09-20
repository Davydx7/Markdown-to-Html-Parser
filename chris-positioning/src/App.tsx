import { useState } from 'react';
import './App.scss';

function App() {
  const [up, setUp] = useState(0);
  const [right, setRight] = useState(0);
  const [down, setDown] = useState(0);
  const [left, setLeft] = useState(0);

  const absoluteStyle = `Top: ${down}px \nLeft: ${left}px\nHeight: ${up}px\nWidth: ${right}px `;

  const relativeStyle = `Top: ${down}px \nLeft: ${left}px\nHeight: ${up}px\nWidth: ${right}px `;

  return (
    <div className="app">
      <div className="column-1">
        <p style={{ color: 'green' }}> Absolute positioning </p>
        <pre>{absoluteStyle}</pre>
        <p style={{ color: 'green' }}> Relative positioning </p>
        <pre>{relativeStyle}</pre>
      </div>
      <div className="column-2">
        <div className="parentElement">
          <div className="anchor" title="anchor" style={{ height: `${up}px`, width: `${right}px` }}>
            <div className="childElement" title="main element" />
          </div>
        </div>
      </div>
      <div className="column-3">
        <div className="position">
          <button disabled>Absolute</button>
          <button>Relative</button>
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
