import { useState } from 'react';
import './App.scss';

function App() {
  const [up, setUp] = useState(0);
  const [right, setRight] = useState(0);
  const [down, setDown] = useState(0);
  const [left, setLeft] = useState(0);

  const sytle = `what a \n life here is where output styles will be`;

  return (
    <div className="app">
      <div className="column-1">
        <p>{sytle}</p>
      </div>
      <div className="column-2">
        <div className="outerDiv">
          <div className="innerDiv" style={{ height: `${up}px`, width: `${right}px` }} />
        </div>
      </div>
      <div className="column-3">
        <div className="controls">
          up
          <input type="number" onChange={(e) => setUp(+e.currentTarget.value)} />
          right
          <input type="number" onChange={(e) => setRight(+e.currentTarget.value)} />
          down
          <input type="number" onChange={(e) => setDown(+e.currentTarget.value)} />
          left
          <input type="number" onChange={(e) => setLeft(+e.currentTarget.value)} />
        </div>
      </div>
    </div>
  );
}

export default App;
