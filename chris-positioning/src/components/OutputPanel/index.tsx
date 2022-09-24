import { useContext } from 'react';
import { DataContext } from '../../store/DataContext';

import './outputPanel.scss';

const OutputPanel: React.FC<{ isAbsolute: boolean }> = ({ isAbsolute }) => {
  const {
    data: {
      x,
      y,
      xMax,
      xMin,
      yMax,
      yMin,
      xPivot,
      yPivot,
      bottom,
      left,
      right,
      top,
      height,
      width,
      xOffset,
      yOffset
    },
    setValue
  } = useContext(DataContext)!;

  const Parent = `position: relative;`;

  const element = `position: absolute;

left: ${xMin}%;
right: ${100 - xMax}%;
top: ${yMin}%;
bottom: ${100 - yMax}%;

margin-left: ${left}px;
margin-right: ${right}px;
margin-top: ${top}px;
margin-bottom: ${bottom}px;`;

  return (
    <aside className="outputPanel">
      <span>CSS Equivalence</span>
      <div className="parent">
        <p style={{ color: 'rgb(16, 236, 101)' }}> Parent </p>
        <pre>{Parent}</pre>
      </div>
      <div className="element">
        <p style={{ color: 'rgb(16, 236, 101)' }}> Element </p>
        <pre>{element}</pre>
      </div>
    </aside>
  );
};
export default OutputPanel;
