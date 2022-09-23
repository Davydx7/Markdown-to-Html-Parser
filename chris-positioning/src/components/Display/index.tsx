import { CSSProperties } from 'react';

const Display: React.FC<{ isAbsolute: boolean }> = ({ isAbsolute }) => {
  const anchor: CSSProperties = {
    position: 'absolute',

    bottom: '25%',
    left: '25%',
    right: '25%',
    top: '25%'
    // height: `${up}px`,
    // width: `${right}px`,
  };

  const pivot: CSSProperties = {
    display: 'contents'
    // position: 'absolute',
    // bottom: '75%',
    // left: '25%',
    // right: '75%',
    // top: '25%'
    // height: `${up}px`,
    // width: `${right}px`,
  };

  const child: CSSProperties = {
    position: 'absolute',

    bottom: '25%',
    left: '25%',
    right: '25%',
    top: '25%'

    // height: `${up}px`,
    // width: `${right}px`,
  };
  return (
    <main className="column-2">
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
