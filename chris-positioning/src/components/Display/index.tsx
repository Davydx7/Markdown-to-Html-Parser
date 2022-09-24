import { CSSProperties, useContext } from 'react';
import { DataContext } from '../../store/DataContext';

import './display.scss';

const Display: React.FC<{ isAbsolute: boolean }> = ({ isAbsolute }) => {
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
    }
  } = useContext(DataContext)!;

  const anchor: CSSProperties = isAbsolute
    ? {
        position: 'absolute',

        left: `${x}%`,
        top: `${y}%`,

        borderRadius: '100%',
        outline: '0.5rem solid red',
        padding: '0.01rem'
      }
    : {
        position: 'absolute',

        bottom: `${100 - yMax}%`,
        left: `${xMin}%`,
        right: `${100 - xMax}%`,
        top: `${yMin}%`
      };

  const pivot: CSSProperties = {
    display: isAbsolute ? 'block' : 'contents',
    position: 'absolute',

    left: `${xOffset}px`,
    top: `${yOffset}px`
  };

  const child: CSSProperties = isAbsolute
    ? {
        position: 'absolute',

        height: `${height}px`,
        width: `${width}px`,

        transform: `translate(-${xPivot}%, -${yPivot}%)` // pivot center
      }
    : {
        position: 'absolute',

        bottom: `${bottom}px`,
        left: `${left}px`,
        right: `${right}px`,
        top: `${top}px`
      };

  // CSS Equivalence for Relative Positioning
  // const test: CSSProperties = {
  //   position: 'absolute',

  //   left: `${xMin}%`,
  //   right: `${100 - xMax}%`,
  //   top: `${yMin}%`,
  //   bottom: `${100 - yMax}%`,

  //   marginLeft: `${left}px`,
  //   marginRight: `${right}px`,
  //   marginTop: `${top}px`,
  //   marginBottom: `${bottom}px`
  // };

  return (
    <main className="display">
      <div className="parentElement" title="viewport">
        <div className="anchor" title="anchor" style={anchor}>
          <div className="pivot" title="pivot" style={pivot}>
            <div className="childElement" title="positioned element" style={child} />
          </div>
        </div>
      </div>
    </main>
  );
};
export default Display;
