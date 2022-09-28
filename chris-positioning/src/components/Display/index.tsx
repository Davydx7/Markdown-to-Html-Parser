import { CSSProperties, useContext } from 'react';
import { DataContext } from '../../store/DataContext';

import './display.scss';

const Display: React.FC<{ isAbsolute: boolean; isUnity: boolean }> = ({ isAbsolute, isUnity }) => {
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
      yOffset,
      CssInsetTop,
      CssInsetRight,
      CssInsetLeft,
      CssInsetBottom,
      CssMarginTop,
      CssMarginRight,
      CssMarginLeft,
      CssMarginBottom,
      CssOffsetLeft,
      CssOffsetTop,
      CssWidth,
      CssHeight
    }
  } = useContext(DataContext)!;

  const anchor: CSSProperties =
    isUnity && isAbsolute
      ? {
          position: 'absolute',

          left: `${x}%`,
          top: `${y}%`,

          borderRadius: '100%',
          outline: '0.5rem solid red',
          padding: '0.01rem'
        }
      : isUnity && !isAbsolute
      ? {
          position: 'absolute',

          bottom: `${100 - yMax}%`,
          left: `${xMin}%`,
          right: `${100 - xMax}%`,
          top: `${yMin}%`
        }
      : !isUnity && isAbsolute
      ? {
          display: 'contents'
        }
      : {
          position: 'absolute',

          bottom: `${CssInsetBottom}%`,
          left: `${CssInsetLeft}%`,
          right: `${CssInsetRight}%`,
          top: `${CssInsetTop}%`
        };

  const pivot: CSSProperties = {
    display: !isUnity || !isAbsolute ? 'contents' : 'block',
    position: 'absolute',

    left: `${xOffset}px`,
    top: `${yOffset}px`
  };

  const child: CSSProperties =
    isUnity && isAbsolute
      ? {
          position: 'absolute',

          height: `${height}px`,
          width: `${width}px`,

          transform: `translate(${-xPivot}%, ${-yPivot}%)` // pivot center
        }
      : isUnity && !isAbsolute
      ? {
          position: 'absolute',

          bottom: `${bottom}px`,
          left: `${left}px`,
          right: `${right}px`,
          top: `${top}px`
        }
      : !isUnity && isAbsolute
      ? {
          position: 'absolute',

          left: `${CssOffsetLeft}px`,
          top: `${CssOffsetTop}px`,

          height: `${CssHeight}px`,
          width: `${CssWidth}px`
        }
      : {
          position: 'absolute',

          bottom: `${CssMarginBottom}px`,
          left: `${CssMarginLeft}px`,
          right: `${CssMarginRight}px`,
          top: `${CssMarginTop}px`
        };

  // React style Object for Element CSS

  // CSS Equivalence for Absolute Positioning
  // const absolute: CSSProperties = {
  //   position: 'absolute',

  //   left: `calc(${x}% + ${xOffset}px)`,
  //   top: `calc(${y}% + ${yOffset}px)`,

  //   height: `${height}px`,
  //   width: `${width}px`,

  //  translate: `${-xPivot}%, ${-yPivot}%`
  // };

  // CSS Equivalence for Relative Positioning
  // const relative: CSSProperties = {
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
