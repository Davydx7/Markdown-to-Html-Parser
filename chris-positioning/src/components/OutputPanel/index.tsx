import { useContext } from 'react';
import { DataContext } from '../../store/DataContext';
import cssToUnity from '../../utils/cssToUnity';
import unityToCss from '../../utils/unityToCss';

import './outputPanel.scss';

const OutputPanel: React.FC<{ isAbsolute: boolean; isUnity: boolean }> = ({
  isAbsolute,
  isUnity
}) => {
  const { data } = useContext(DataContext)!;

  const element = isUnity ? unityToCss(data, isAbsolute) : cssToUnity(data, isAbsolute);

  const Parent = `position: relative;`;

  return (
    <aside className="outputPanel">
      <span>{isUnity ? 'CSS Equivalence' : 'Unity Equivalence'}</span>
      {isUnity && (
        <div className="parent">
          <p style={{ color: 'rgb(16, 236, 101)' }}> Parent </p>
          <div className="code">{Parent}</div>
        </div>
      )}
      <div className="element">
        <p style={{ color: 'rgb(16, 236, 101)' }}> Element </p>
        <div className="code">{element}</div>
      </div>
    </aside>
  );
};
export default OutputPanel;
